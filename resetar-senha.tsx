import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../../lib/supabase';
import * as Linking from 'expo-linking';

export default function ResetarSenha() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleDeepLink = async () => {
      const url = await Linking.getInitialURL();
      if (url) {
        const { error } = await supabase.auth.exchangeCodeForSession(url);
        if (!error) {
          router.replace('/RecSsenha/nova-senha');
        } else {
          console.error('Erro ao autenticar com o link:', error.message);
        }
      }
      setLoading(false);
    };

    handleDeepLink();

    // Listener para casos em que o app já estava aberto
    const subscription = Linking.addEventListener('url', async ({ url }) => {
      const { error } = await supabase.auth.exchangeCodeForSession(url);
      if (!error) {
        router.replace('/RecSsenha/nova-senha');
      } else {
        console.error('Erro ao autenticar com o link:', error.message);
      }
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Text style={styles.text}>Redirecionando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { marginTop: 16 },
});
