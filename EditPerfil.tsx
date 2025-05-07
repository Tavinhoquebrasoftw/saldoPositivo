import React, { useState } from "react";
import { View, Alert, StyleSheet } from "react-native";
import { TextInput, Button, Avatar, ActivityIndicator, Text } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { supabase } from "../lib/supabase";

export function EditPerfil(){
    const [imageUri, setImageUri] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [newUsername, setNewUsername] = useState("");

    const uriToBlob = async (uri: string) => {
        const response = await fetch(uri);
        return await response.blob();
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    const uploadImage = async () => {
        if (!imageUri) {
          Alert.alert("Erro", "Selecione uma imagem para o perfil.");
          return;
        }
      
        setLoading(true);
        try {
          // Pega o usuário logado
          const { data: userData, error: userError } = await supabase.auth.getUser();
          if (userError || !userData?.user) throw new Error("Usuário não encontrado.");
          const userId = userData.user.id;
      
          // Cria nome e caminho do arquivo
          const fileExt = imageUri.split(".").pop(); // jpg, png, etc.
          const fileName = `${userId}-profile.${fileExt}`;
          const filePath = `profile_pictures/${fileName}`;
      
          // Converte URI da imagem em Blob
          const response = await fetch(imageUri);
          const blob = await response.blob();
      
          // Faz upload com upsert para substituir caso já exista
          const { error: uploadError } = await supabase.storage
            .from("avatars")
            .upload(filePath, blob, {
              cacheControl: "3600",
              upsert: true,
              contentType: blob.type,
            });
      
          if (uploadError) throw new Error("Erro ao enviar imagem: " + uploadError.message);
      
          // Obtém a URL pública da imagem
          const { data: publicData } = supabase.storage
            .from("avatars")
            .getPublicUrl(filePath);
      
          const publicUrl = publicData?.publicUrl;
          if (!publicUrl) throw new Error("Erro ao obter URL pública da imagem.");
      
          // Salva URL no banco de dados (users)
          const { error: updateError } = await supabase
            .from("users")
            .update({ profile_pictures: publicUrl })
            .eq("id", userId);
      
          if (updateError) throw new Error("Erro ao salvar URL no banco de dados.");
      
          Alert.alert("Sucesso", "Imagem de perfil atualizada!");
        } catch (error: any) {
          Alert.alert("Erro", error.message);
        } finally {
          setLoading(false);
        }
      };
      

    const updateUsername = async () => {
        if (!newUsername.trim()) {
            Alert.alert("Erro", "Digite um nome válido.");
            return;
        }
        try {
            const { data: userData, error: userError } = await supabase.auth.getUser();
            if (userError || !userData?.user) throw new Error("Usuário não encontrado.");
            
            await supabase.from("users").update({ name: newUsername }).eq("id", userData.user.id);
            Alert.alert("Sucesso", "Nome atualizado!");
        } catch (error: any) {
            Alert.alert("Erro", error.message);
        }
    };

    const deleteAccount = async () => {
        try {
            const { data: userData, error: userError } = await supabase.auth.getUser();
            if (userError || !userData?.user) throw new Error("Usuário não encontrado.");
            
            const userId = userData.user.id;
            await supabase.from("users").delete().eq("id", userId);
            await supabase.auth.admin.deleteUser(userId);
            Alert.alert("Conta Excluída", "Sua conta foi removida com sucesso.");
        } catch (error: any) {
            Alert.alert("Erro", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar Perfil</Text>
            <Avatar.Image 
                size={100} 
                source={imageUri ? { uri: imageUri } : require("../assets/IconUser.png")} 
            />
            <Button mode="text" onPress={pickImage} style={styles.changePhoto}>
                Mudar foto
            </Button>
            
            <TextInput 
                label="Nome" 
                value={newUsername} 
                onChangeText={setNewUsername} 
                style={styles.input} 
            />
            <Button mode="contained" onPress={updateUsername} style={styles.button}>
                Alterar Perfil
            </Button>

            {loading ? (
                <ActivityIndicator animating={true} />
            ) : (
                <Button mode="contained" onPress={uploadImage} style={styles.button}>
                    Salvar Imagem
                </Button>
            )}
            <Button mode="contained" buttonColor="red" onPress={deleteAccount} style={styles.deleteButton}>
                Excluir Conta
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0B2245",
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: "#FFF",
        marginBottom: 20,
    },
    changePhoto: {
        color: "#FFF",
        marginVertical: 10,
    },
    input: {
        width: "100%",
        marginVertical: 10,
        backgroundColor: "white",
    },
    button: {
        width: "100%",
        marginVertical: 5,
        backgroundColor: "#28A745",
    },
    deleteButton: {
        width: "100%",
        marginVertical: 5,
        backgroundColor: "#DC3545",
    }
});

export default EditPerfil;