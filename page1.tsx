import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable, ActivityIndicator, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import firebase from '../../../firebase';
import { supabase } from '../../lib/supabase';
import { LoginHeader } from '../headerTO'; // Make sure this path is correct

export default function Prof2() {
    const [info, setInfo] = useState("");
    const [link, setLink] = useState("");
    const [professor, setProfessor] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
      const fetchUserData = async () => {
        const { data: userData, error } = await supabase.auth.getUser();
        const user = userData?.user;
  
        if (error || !user) {
          console.error('Erro ao obter usuário:', error);
          return;
        }
  
        setProfessor(user.user_metadata?.is_professor);
        setUserId(user.id); 
        setLoading(false);
      };
  
      fetchUserData();
    }, []);
  
    const handleCreateRoom = async () => {
      if (!userId) {
        alert("Usuário não autenticado.");
        return;
      }
  
      try {
        const salaRef = await firebase.firestore().collection("Salas").add({
          nome: info,
          link: link,
          userId: userId, 
          createdAt: new Date(),
        });
  
        alert(`Sala criada com ID: ${salaRef.id}`);
        setInfo("");
        setLink("");
      } catch (error) {
        console.error("Erro ao criar sala:", error);
        alert("Erro ao criar sala. Tente novamente.");
      }
    };

    if (loading) {
        return (
            <View style={styles.container2}>
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#00C20D" />
                </View>
            </View>
        );
    }

    return (
        <ScrollView style={styles.mainContainer}>
            <LoginHeader title={professor ? "Professor" : "Aluno"} showBackButton={true} />
            
            {professor ? (
                <View style={styles.professorContainer}>
                    <Text style={styles.title}>Criar Nova Sala</Text>
                    
                    <View style={styles.inputContainer}>
                        <TextInput
                            mode="outlined"
                            label="Nome da Sala"
                            style={styles.input}
                            placeholder='Digite o nome da sala'
                            onChangeText={text => setInfo(text)}
                            value={info}
                            theme={{ colors: { primary: '#001E57' } }}
                        />
                    </View>
                    
                    <View style={styles.inputContainer}>
                        <TextInput
                            mode="outlined"
                            label="Link da Sala"
                            style={styles.input}
                            placeholder='Cole o link da sala'
                            onChangeText={text => setLink(text)}
                            value={link}
                            theme={{ colors: { primary: '#001E57' } }}
                        />
                    </View>
                    
                    <View style={styles.buttonGroup}>
                        <Pressable 
                            style={[styles.button, styles.primaryButton]} 
                            onPress={handleCreateRoom}
                        >
                            <Text style={styles.buttonText}>Criar Sala</Text>
                        </Pressable>
                        
                        <Pressable 
                            style={[styles.button, styles.secondaryButton]} 
                            onPress={() => router.push("/Prof2/lista")}
                        >
                            <Text style={styles.buttonText}>Ver Salas</Text>
                        </Pressable>
                    </View>
                </View>
            ) : (
                <View style={styles.studentContainer}>
                    <Text style={styles.welcomeTitle}>Bem-vindo, Aluno!</Text>
                    
                    <Pressable 
                        style={[styles.button, styles.primaryButton]} 
                        onPress={() => router.push('/Alunos/EntrarSala')}
                    >
                        <Text style={styles.buttonText}>Entrar em uma Sala</Text>
                    </Pressable>
                    
                    <Pressable 
                        style={[styles.button, styles.secondaryButton]} 
                        onPress={() => router.push('/Alunos/MinhasSalas')}
                    >
                        <Text style={styles.buttonText}>Ver Minhas Salas</Text>
                    </Pressable>
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    container2: {
        flex: 1,
        backgroundColor: "#001E57",
        justifyContent: "center",
        alignItems: "center",
    },
    loaderContainer: {
        backgroundColor: "#002b57",
        padding: 20,
        borderRadius: 20,
    },
    professorContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    studentContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#001E57',
        marginBottom: 30,
        textAlign: 'center',
    },
    welcomeTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#001E57',
        marginBottom: 40,
        textAlign: 'center',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#FFF',
    },
    buttonGroup: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        width: '100%',
    },
    primaryButton: {
        backgroundColor: '#00C20D',
    },
    secondaryButton: {
        backgroundColor: '#001E57',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});