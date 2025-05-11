import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { supabase } from '../../lib/supabase';
import firebase from '../../../firebase';
import { router } from 'expo-router';

export default function EntrarSala() {
  const [codigoSala, setCodigoSala] = useState('');

  const handleEntrar = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const sala = await firebase.firestore().collection('Salas').doc(codigoSala).get();
    if (!sala.exists) {
      Alert.alert("Erro", "Sala não encontrada.");
      return;
    }

  
    await firebase.firestore().collection('Participantes').add({
      userId: user.id,
      salaId: codigoSala,
    });

    Alert.alert("Sucesso", "Você entrou na sala!");
    router.push({pathname: "/Alunos/VerSala", params: {id:codigoSala}});
  };

  return (
    <View style={styles.container}>
      <Text>Digite o código da sala:</Text>
      <TextInput
        style={styles.input}
        value={codigoSala}
        onChangeText={setCodigoSala}
        placeholder="ID da sala"
      />
      <Pressable onPress={handleEntrar} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', width: '80%', padding: 8, marginVertical: 12 },
  button: { backgroundColor: '#007AFF', padding: 12, borderRadius: 8 },
  buttonText: { color: '#fff' },
});
