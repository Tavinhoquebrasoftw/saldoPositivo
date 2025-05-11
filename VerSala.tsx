import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import firebase from '../../../firebase';

type Sala = {
  id: string;
  info?: string;
  link?: string;
};

export default function VerSala() {
  const { id } = useLocalSearchParams();
  const [sala, setSala] = useState<Sala | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSala = async () => {
      try {
        const doc = await firebase.firestore().collection('Salas').doc(String(id)).get();

        if (!doc.exists) {
          Alert.alert('Erro', 'Sala não encontrada');
          return;
        }

        setSala({ id: doc.id, ...doc.data() } as Sala);
      } catch (error) {
        console.error('Erro ao buscar sala:', error);
        Alert.alert('Erro', 'Não foi possível buscar a sala.');
      } finally {
        setLoading(false);
      }
    };

    fetchSala();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (!sala) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Sala não encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Sala</Text>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.value}>{sala.info}</Text>

      <Text style={styles.label}>Link:</Text>
      <Text style={styles.value}>{sala.link || 'Nenhum link cadastrado'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 18, fontWeight: '600', marginTop: 12 },
  value: { fontSize: 16, color: '#333' },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { fontSize: 18, color: 'red' },
});
