import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity } from 'react-native';
import firebase from '../../../firebase';
import { supabase } from '../../lib/supabase';

export default function Prof2() {
    const [info, setInfo] = useState("");
    const [link, setLink] = useState("");
    const [salas, setSalas] = useState<{ id: string; info?: string; link?: string }[]>([]);
    const [editId, setEditId] = useState("");
    let   [editState, setEditState] = useState("none");

    useEffect(() => {
        async function fetchSalas() {
          const { data: { user }, error } = await supabase.auth.getUser();

          if(error || !user){
            console.log("erro ao obert usuario supa ou usu nao autenticado", error);
            return;
          }
      
          const unsubscribe = firebase
            .firestore()
            .collection('Salas')
            .where('userId', '==', user.id)
            .onSnapshot((snapshot) => {
              const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              setSalas(data);
            });
      
          return () => unsubscribe();
        }
      
        fetchSalas();
      }, []);

    const excluirSala = (id: string) => {
        firebase.firestore().collection('Salas').doc(id).delete();
    }

    const atualizarSala = (id: string, dados: any) => {
        firebase.firestore().collection('Salas').doc(id).update(dados);
        closeEdit();
    }

    const showEdit = (id: string) => {
        setEditState("flex")
        setEditId(id)
    }

    const closeEdit = () =>{
        setEditState("none")
        setEditId("")
    }
    type Sala = {
        id: string;
        info?: string;
        link?: string;
      };
      
    const renderSala = ({item}: {item: Sala}) => {
        return(
            <TouchableOpacity onPress={()=> router.push("/Prof2/inSala")}>
            <View style={styles.pessoa}>
                <View style={styles.variaveis}>
                    <Text style={styles.nome}>{`${item.info} ${item.link}`}</Text>
                </View>
                <View style={styles.ecoes}>
                    <Pressable onPress={()=> showEdit(item.id)}>
                        <View style={styles.edit}><Text>+</Text></View>
                    </Pressable>
                    <Pressable onPress={()=> excluirSala(item.id)}>
                    {/* <View style={styles.trash}><Text>NNNNNNN</Text></View> */}
                    </Pressable>
                </View>
            </View>
            </TouchableOpacity>
        );
    }

    const editbox = ()=>{
        return(
            <View>

            </View>
        );
    }

 return (
   <View style={styles.container}>
        {editbox()}
        <Text style={styles.title}>Lista de Salas</Text>
        <FlatList
            data={salas}
            renderItem={renderSala}
            keyExtractor={ (item) => item.id}
            contentContainerStyle={styles.list}
        />
        <Pressable onPress={()=> router.push("/")} style={styles.button}>
            <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        paddingTop:50,
        height:"100%",
        paddingBottom:25,
        gap:45

    },
    title:{
        fontSize:24,
        fontWeight:"bold"
    },
    list:{
        flexGrow:1,
        alignItems:"center",
        justifyContent:"center",
        width:"100%"
    },
    pessoa:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#eee",
        padding:10,
        marginVertical:5,
        width:"90%",
        borderRadius:5,
        alignItems:"flex-start",
        aspectRatio:5,
        justifyContent:"space-between"
    },
    variaveis:{
        height:"100%",
        gap:5
    },
    nome:{
        fontSize:18,
        fontWeight:"bold"
    },
    ecoes:{
        height:"100%",
        gap:5
    },
    edit:{
        height:20,
        gap:20
    },
    trash:{
        height:25,
        width:25,
        backgroundColor:"#e7131357",
        borderRadius:5
    },
    button:{
        backgroundColor:"#007AFF",
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:5,
        alignItems:"center",
    },
    buttonText:{
        color:"#fff",
        fontSize:16,
    },
    editContainer:{
        position:"absolute",
        left:0,
        right:0,
        alignItems:"center",
        zIndex:1
    },
    editBox:{
        backgroundColor:"#fff",
        borderRadius:5,
        width:"100%",
        aspectRatio:1,
        elevation:5,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        gap:15
    },
    buttons:{
        width:"65%",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    editButtons:{
        width: "65%",
        flexDirection:"row",
        justifyContent: "space-between",
    },
    editButton:{
        backgroundColor:"#007AFF",
        justifyContent:"center",
        borderRadius:5,
        alignItems:"center",
        width:"35%",
        aspectRatio:2.10
    },
    editButtonText:{
        color:"#fff",
        fontSize:14,
    },
    titletext:{
        fontSize:24,
        fontWeight:"bold",
    },
    input:{
        paddingHorizontal:12,
        width: "65%",
        height:30,
        marginVertical:10,
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius: 5,
    },
    editForm:{
        alignItems:"center",
        justifyContent:"center",
        width:"100%"
    },
})