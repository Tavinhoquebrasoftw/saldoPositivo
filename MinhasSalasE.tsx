import { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Animated,
  Pressable,
  TextInput,
  Platform,
} from 'react-native';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

type Sala = { id: string; nome?: string; link?: string };

export default function MinhasSalas() {
  const [salas, setSalas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); // Controla a visibilidade do modal
  const [codigoSala, setCodigoSala] = useState('');
  const [animation] = useState(new Animated.Value(0)); // Animação para o modal

  // Abrir o modal
  const openModal = () => {
    setModalVisible(true);
    // Animação para o modal subir
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Fechar o modal
  const closeModal = () => {
    // Animação para o modal descer
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false)); // Fecha o modal após animação
  };

  const irParaSala = (codigoSala: string) => {
    router.push({ pathname: "/Alunos/VerSala", params: { id: codigoSala } });
  };

  return (
    <View style={styles.container}>
      {/* Barra superior */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={24} color="white" style={{ marginRight: 15 }} />
          <Text style={styles.headerTitle}>minhas{'\n'}salas</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={openModal}>
          <Text style={styles.headerAction}>adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de salas */}
      <FlatList
        contentContainerStyle={styles.listContent}
        data={salas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => irParaSala(item.id)}>
            <Text style={styles.text}>{item.nome ?? 'Sala sem nome'}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Modal */}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <Animated.View
            style={[
              styles.card,
              {
                transform: [{ translateY: animation.interpolate({ inputRange: [0, 1], outputRange: [300, 0] }) }],
              },
            ]}
          >
            <View style={styles.dragIndicator} />
            <Text style={styles.title}>adicionar nova sala</Text>

            {/* Campo Código da Sala */}
            <Text style={styles.label}>código da sala</Text>
            <TextInput
              style={styles.input}
              value={codigoSala}
              onChangeText={setCodigoSala}
              placeholder="digite o id da sala"
              placeholderTextColor="#B0B8D1"
            />

            {/* Botão de criar */}
            <Pressable style={styles.button} onPress={closeModal}>
              <Text style={styles.buttonText}>entrar</Text>
            </Pressable>

            {/* Fechar Modal */}
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeText}>Fechar</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001C55',
  },
  header: {
    height: 60,
    backgroundColor: '#00C20D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 18,
  },
  headerAction: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  listContent: {
    padding: 20,
  },
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
    color: '#000',
  },

  // Modal Styles
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
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
     ...(Platform.OS === "web" ? {outlineWidth:0} : {}), 
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
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#FF3B30',
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
