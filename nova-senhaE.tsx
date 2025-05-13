import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function NovaSenha() {
  console.log('Botão salvar clicado');

  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleAtualizarSenha = () => {
    if (senha.length !== 6) {
      setModalMessage('A senha precisa ter exatamente 6 dígitos.');
      setShowModal(true);
      return;
    }

    if (senha !== confirmarSenha) {
      setModalMessage('As senhas não coincidem.');
      setShowModal(true);
      return;
    }

    setModalMessage('Senha alterada com sucesso.');
    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      {/* Topo com botão voltar e título */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {/* lógica de voltar */}}>
          <Ionicons name="chevron-back-sharp" size={24} color="white" />
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

      {/* Modal */}
     {showModal && (
  <View style={styles.modalOverlay}>
    <View style={styles.modalContainer}>
      <Text style={styles.modalText}>{modalMessage}</Text>
      <Button
        mode="contained"
        onPress={() => setShowModal(false)}
        buttonColor="#00C20D"
        style={{ marginTop: 16 }}
      >
        OK
      </Button>
    </View>
  </View>
)}

    
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
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
   
  },
  modalText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
});
