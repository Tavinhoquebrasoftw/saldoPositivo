
import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Perfil() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/Editar Perfil.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Conteúdo */}
      <View style={styles.content}>
        {/* Foto de perfil */}
        <View style={styles.profileContainer}>
          <Ionicons name="person-circle-outline" size={100} color="#fff" />
          <Text style={styles.changePhotoText}>Mudar foto</Text>
        </View>

        {/* Campo Nome */}
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} value="Erick" />

        {/* Campo Senha */}
        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input} secureTextEntry value="*******" />

        {/* Botões */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>Alterar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.buttonText}>Excluir conta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  changePhotoText: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
  },
  label: {
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 40,
    marginTop: 20,
    fontSize: 16,
  },
  input: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 5,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
    marginTop: 30,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
