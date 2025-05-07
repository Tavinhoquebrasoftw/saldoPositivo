import { Stack, Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'; 
export default function TabLayout() {
  return (
    
    <Tabs screenOptions={{
    tabBarActiveTintColor: '#ffd33d',
    headerStyle: {
      backgroundColor: '#001e57',
    },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
    backgroundColor: '#001e57',
    },
  }}
    >
      <Tabs.Screen name="TelaMenu" options={{ title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name='home-sharp' color="#00C20D" size={24} />
        ),
       }}  />
      <Tabs.Screen name="Perfil" options={{ title: 'Perfil',
         tabBarIcon: ({ color, focused }) => (
          <Ionicons name="person-sharp" color="#00C20D" size={24} />
        ),
       }} />
      <Tabs.Screen name="TelaDesempenho" options={{ title: 'Resumo Gráfico',
         tabBarIcon: ({ color, focused }) => (
          <Ionicons name="bar-chart-sharp" color="#00C20D" size={24} />
        ),
       }} />
      <Tabs.Screen name="Ajuda" options={{ title: 'Sobre',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name="help-sharp" color="#00C20D" size={24} />
        ),
       }} />
    </Tabs>
    
  );
}
