import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Modal,
  Pressable,
  Platform,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const NvelIC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [resumo, setResumo] = useState("");
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);

  return (
    <ImageBackground style={styles.background}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color="white"
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Educação Financeira I3AA</Text>
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Ionicons name="ellipsis-vertical" size={22} color="white" />
        </TouchableOpacity>
      </View>

      {/* MENU */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setMenuVisible(false)}
        >
          <View style={styles.menuContainer}>
            <Pressable style={styles.menuItem} onPress={() => {}}>
              <Text>Editar sala</Text>
            </Pressable>
           <Pressable
  style={styles.menuItem}
  onPress={() => {
    setMenuVisible(false);
    setConfirmDeleteVisible(true);
  }}
>
  <Text>Excluir sala</Text>
</Pressable>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* MODAL DE CONFIRMAÇÃO */}
<Modal
  transparent={true}
  animationType="fade"
  visible={confirmDeleteVisible}
  onRequestClose={() => setConfirmDeleteVisible(false)}
>
  <View style={styles.modalOverlay}>
    <View style={styles.confirmContainer}>
      <Text style={styles.confirmTitle}>Tem certeza que deseja excluir esta sala?</Text>
      <View style={styles.confirmButtons}>
        <TouchableOpacity
          style={[styles.confirmButton, { backgroundColor: '#ff5555' }]}
          onPress={() => setConfirmDeleteVisible(false)}
        >
          <Text style={{color:'white'}}>Confirmar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.confirmButton, { backgroundColor: '#ccc' }]}
          onPress={() => {
            setConfirmDeleteVisible(false);
            console.log("Sala excluída!");
            // aqui você pode chamar sua função real de exclusão
          }}
        >
          <Text style={{ color: 'black' }}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>


      {/* ADICIONAR RESUMO */}
      <View style={styles.contentContainer}>
        <Text style={styles.label}>Adicionar resumo</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="adicione o link do resumo"
            placeholderTextColor="#9B9B9B"
            value={resumo}
            onChangeText={setResumo}
          />
          <TouchableOpacity onPress={() => console.log("Resumo enviado")}>
            <Ionicons name="arrow-forward-circle-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#001E57",
  },
  header: {
    height: 60,
    backgroundColor: "#00C20D",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  headerTitle: {
    color: "white",
    fontSize: 14,
    lineHeight: 18,
    flex: 1,
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 60,
    paddingRight: 10,
  },
  menuContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 8,
    width: 150,
    elevation: 4,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  contentContainer: {
    padding: 16,
  },
  label: {
    color: "white",
    fontSize: 14,
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    backgroundColor: "#002E73",
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: "center",
    height: 45,
  },
  input: {
    flex: 1,
    color: "white",
    ...(Platform.OS === "web" ? {outlineWidth:0} : {}), 
  },
  confirmContainer: {
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
  width: '80%',
  alignItems: 'center',
},
confirmTitle: {
  fontSize: 16,
  marginBottom: 20,
  textAlign: 'center',
},
confirmButtons: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
},
confirmButton: {
  flex: 1,
  paddingVertical: 10,
  marginHorizontal: 5,
  borderRadius: 6,
  alignItems: 'center',
},

});

export default NvelIC;
