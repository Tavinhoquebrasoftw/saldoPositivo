import React, { useState } from 'react';
import { View, Alert, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function NovaSenha() {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleAtualizarSenha = async () => {
    if (senha.length < 6) {
      Alert.alert('Senha fraca', 'A senha precisa ter pelo menos 6 caracteres.');
      return;
    }
    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    // lógica de atualização da senha aqui
  };

  return (
    <View style={styles.container}>
      {/* Topo com botão voltar e título */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {/* lógica de voltar */}}>
        <Ionicons name="chevron-back-sharp" size={24} color="white" />
          {/* <Icon name="arrow-back" size={24} color="#fff" /> */}
        </TouchableOpacity>
        <Text style={styles.headerText}>Mudar Senha</Text>
      </View>

      {/* Ilustração */}
      <Image
        source={require('../assets/password.webp')} // substitua com o caminho correto
        style={styles.image}
        resizeMode="contain"
      />

      {/* Inputs */}
      <TextInput
        placeholder="senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        mode="outlined"
        style={styles.input}
        placeholderTextColor="#ccc"
      />
      <TextInput
        placeholder="confirmar senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        mode="outlined"
        style={styles.input}
        placeholderTextColor="#ccc"
      />

      {/* Botão */}
      <Button
        mode="contained"
        onPress={handleAtualizarSenha}
        style={styles.botao}
        labelStyle={{ color: '#fff', textTransform: 'lowercase', fontWeight: 'bold' }}
        contentStyle={{ backgroundColor: '#00C20D', height: 50 }} // verde + altura
      >
        salvar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001C55',
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 32,
    alignSelf: 'center',
    
  },
  input: {
    backgroundColor: 'transparent',
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    color: 'white',
  },
  botao: {
    marginTop: 8,
  borderRadius: 8,
  justifyContent: 'center',
  
  },
});
