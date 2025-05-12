import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default function EntrarSala() {
  const [codigoSala, setCodigoSala] = useState('');
  const [nomeSala, setNomeSala] = useState('');
  const [participantes, setParticipantes] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.dragIndicator} />

        <TouchableOpacity>
          <Text style={styles.link}>adicionar nova sala</Text>
        </TouchableOpacity>

        <Text style={styles.label}>código da sala</Text>
        <TextInput
          style={styles.input}
          value={codigoSala}
          onChangeText={setCodigoSala}
          placeholder="digite o id da sala"
          placeholderTextColor="#B0B8D1"
        />

        <Text style={styles.label}>nome da sala</Text>
        <TextInput
          style={styles.input}
          value={nomeSala}
          onChangeText={setNomeSala}
        />

        <Text style={styles.label}>participantes</Text>
        <TextInput
          style={styles.input}
          value={participantes}
          onChangeText={setParticipantes}
        />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>entrar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#062863',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },
  dragIndicator: {
    width: 40,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D9D9D9',
    marginBottom: 16,
  },
  link: {
    color: '#D9D9FF',
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  label: {
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#5A6FAE',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: '#fff',
    marginBottom: 8,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#00D42F',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
