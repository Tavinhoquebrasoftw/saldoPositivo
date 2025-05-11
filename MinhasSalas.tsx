import { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { supabase } from '../../lib/supabase';
import firebase from '../../../firebase';
import { router } from 'expo-router';

type Sala = { id: string; nome?: string; link?: string };

export default function MinhasSalas() {
  const [salas, setSalas] = useState<Sala[]>([]);

  useEffect(() => {
    const fetchSalas = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const participacoes = await firebase.firestore()
        .collection('Participantes')
        .where('userId', '==', user.id)
        .get();

      const salaIds = participacoes.docs.map(doc => doc.data().salaId);

      const salaPromises = salaIds.map(async (id: string) => {
        const salaDoc = await firebase.firestore().collection('Salas').doc(id).get();
        return { id: salaDoc.id, ...salaDoc.data() } as Sala;
      });

      const salasData = await Promise.all(salaPromises);
      setSalas(salasData);
    };

    fetchSalas();
  }, []);

  const irParaSala = (codigoSala: string) => {
    router.push({ pathname: "/Alunos/VerSala", params: { id: codigoSala } });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Minhas Salas</Text>
      <FlatList
        data={salas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => irParaSala(item.id)}>
            <Text style={styles.text}>{item.nome ?? 'Sala sem nome'}</Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
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
  }
});
