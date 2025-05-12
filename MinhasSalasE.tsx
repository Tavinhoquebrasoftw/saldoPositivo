import { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

type Sala = { id: string; nome?: string; link?: string };

export default function MinhasSalas() {
  const [salas, setSalas] = useState<Sala[]>([]);

  // useEffect(() => {
  //   // Código para buscar salas do Supabase/Firebase
  // }, []);

  const irParaSala = (codigoSala: string) => {
    router.push({ pathname: "/Alunos/VerSala", params: { id: codigoSala } });

    if(){
      return(
        <View style={}>
         <Image source={require('../assets/lupa.png')} style={{width: 100, height: 100}} />

         <Text>nenhuma sala</Text>
         <Text>adicione uma sala para que possamos te ajudar a controlar suas finanças</Text>
         
        </View>
      )
    }
  };

  return (
    <View style={styles.container}>
      {/* Barra superior */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={24} color="white" style={{marginRight:15}} />
          {/* <Text style={styles.backArrow}>←</Text> */}
          <Text style={styles.headerTitle}>minhas{'\n'}salas</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {/* lógica de adicionar sala */}}>
          <Text style={styles.headerAction}>adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de salas */}
      <FlatList
        contentContainerStyle={styles.listContent}
        data={salas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => irParaSala(item.id)}>
            <Text style={styles.text}>{item.nome ?? 'Sala sem nome'}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001C55',
  },
  header: {
    height: 60,
    backgroundColor: '#00C20D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrow: {
    color: 'white',
    fontSize: 18,
    marginRight: 6,
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 18,
  },
  headerAction: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  listContent: {
    padding: 20,
  },
  item: {
    padding: 15,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});
