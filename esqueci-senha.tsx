import React, { useState } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { supabase } from '../../lib/supabase';

export default function EsqueciSenha() {
  const [email, setEmail] = useState('');

  const handleEnviarEmail = async () => {
    if (!email.includes('@')) {
      Alert.alert('Email inválido', 'Por favor, insira um email válido.');
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'com.saldopositivo://RecSsenha/resetar-senha',
    });

    if (error) {
      Alert.alert('Erro', error.message);
    } else {
      Alert.alert('Verifique seu email', 'Enviamos um link para redefinir sua senha.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueci minha senha</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleEnviarEmail}>
        Enviar link de recuperação
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, flex: 1, justifyContent: 'center' },
  title: { fontSize: 20, marginBottom: 20, textAlign: 'center', fontWeight: 'bold' },
  input: { marginBottom: 20 },
});
