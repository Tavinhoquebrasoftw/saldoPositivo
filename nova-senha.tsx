import React, { useState } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { supabase } from '../../lib/supabase';

export default function NovaSenha() {
  const [novaSenha, setNovaSenha] = useState('');

  const handleAtualizarSenha = async () => {
    if (novaSenha.length < 6) {
      Alert.alert('Senha fraca', 'A senha precisa ter pelo menos 6 caracteres.');
      return;
    }

    const { error } = await supabase.auth.updateUser({ password: novaSenha });

    if (error) {
      Alert.alert('Erro ao atualizar senha', error.message);
    } else {
      Alert.alert('Sucesso', 'Senha redefinida com sucesso!');
      setNovaSenha('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite sua nova senha</Text>
      <TextInput
        label="Nova senha"
        secureTextEntry
        value={novaSenha}
        onChangeText={setNovaSenha}
        mode="outlined"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleAtualizarSenha}>
        Atualizar senha
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, flex: 1, justifyContent: 'center' },
  title: { fontSize: 20, marginBottom: 20, textAlign: 'center', fontWeight: 'bold' },
  input: { marginBottom: 20 },
});
