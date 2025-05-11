import { ButtonProps } from '@rneui/themed/dist/Button';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable, Button, ActivityIndicator} from 'react-native';
import { TextInput } from 'react-native-paper';
import firebase from '../../../firebase';
import { supabase } from '../../lib/supabase';


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
  
    const handle = async () => {
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
            return(  <View style={styles.container2}>
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color="#00ff00" />
            </View>
          </View>
            );
          }
        
          if (professor) {
            return (
              <View style={styles.container}>
          <Text>sala </Text>
          <View style={styles.form}>
              <TextInput
                  style={styles.input}
                  placeholder='info'
                  onChangeText={text => setInfo(text)}
                  value={info}        
              />
          </View>
          <View>
          <TextInput
                  style={styles.input}
                  placeholder='Link'
                  onChangeText={text => setLink(text)}
                  value={link}        
              />
          </View>
          <View style={styles.buttons}>
              <Pressable style={styles.button} onPress={handle}>
                  <Text style={styles.buttonText}>Criar </Text>
              </Pressable>
              <Pressable style={styles.button} onPress={()=> router.push("/Prof2/lista")}>
                  <Text style={styles.buttonText}>Ver Salas</Text>
              </Pressable>
          </View>
         </View>
            );
          }
 
    
 return (
    <View style={styles.container1}>
    <Text style={styles.title1}>Bem-vindo, aluno!</Text>

    <Pressable style={styles.button1} onPress={() => router.push('/Alunos/EntrarSala')}>
      <Text style={styles.buttonText1}>Entrar em uma sala</Text>
    </Pressable>

    <Pressable style={styles.button1} onPress={() => router.push('/Alunos/MinhasSalas')}>
      <Text style={styles.buttonText1}>Ver minhas salas</Text>
    </Pressable>
  </View>
  );
}

const styles = StyleSheet.create({
    container1: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 },
  title1: { fontSize: 22, fontWeight: 'bold' },
  button1: { backgroundColor: '#007AFF', padding: 12, borderRadius: 8 },
  buttonText1: { color: '#fff', fontSize: 16 },
    container:{
        flex:1,
        backgroundColor: "#fff",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:100,
        gap:40
    },
    container2: {
      flex: 1,
      backgroundColor: "#001e3c", // azul escuro
      justifyContent: "center",
      alignItems: "center",
    },
    loaderContainer: {
      backgroundColor: "#002b57", // um tom ainda mais escuro, opcional
      padding: 20,
      borderRadius: 20,
    },
    form:{
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
    },
    title:{
        fontSize:32,
        fontWeight:"bold",
        marginBottom:20,
    },
    input:{
        width:"65%",
        height:40,
        marginVertical:10,
        paddingHorizontal:10,
        borderWidth:1,
        borderColor: "#ccc",
        borderRadius:5,
    },
    buttons:{
        width:"65%",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    button:{
        backgroundColor:"#007AFF",
        justifyContent:"center",
        borderRadius:5,
        alignItems:"center",
        width: "35%",
        aspectRatio:2.10,
    },
    buttonText:{
        color:"#fff",
        fontSize:16,
    }
})