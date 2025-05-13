import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Modal,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function PerfilView() {
  const [notificacoesAtivadas, setNotificacoesAtivadas] = useState(true);
  const [infoPessoaisAberto, setInfoPessoaisAberto] = useState(false);
  const [foto, setFoto] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMensagem, setModalMensagem] = useState("");

  const trocarFoto = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        setModalMensagem("Permissão de acesso à galeria negada.");
        setModalVisible(true);
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        const selectedAsset = result.assets[0];
        setFoto(selectedAsset.uri);
        setModalMensagem("Foto atualizada com sucesso!");
      } else {
        setModalMensagem("Nenhuma foto foi selecionada.");
      }
    } catch (error) {
      console.error("Erro ao trocar foto:", error);
      setModalMensagem("Erro ao atualizar a foto.");
    } finally {
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.status}>Potencial investidor</Text>

      {/* Cabeçalho com avatar e botão de trocar foto */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          {foto ? (
            <Image source={{ uri: foto }} style={styles.avatar} />
          ) : (
            <View style={styles.avatar} />
          )}
          <TouchableOpacity style={styles.editButton} onPress={trocarFoto}>
            <Ionicons name="camera" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.userName}>Erick Magalhães Coutinho</Text>

      {/* Seção: Minha Conta */}
      <View style={styles.section}>
        <View style={{ left: 5, bottom: 5 }}>
          <Text style={{ color: "#fff", fontFamily: "Roboto" }}>Minha conta</Text>
        </View>
        <TouchableOpacity
          style={styles.infoHeader}
          onPress={() => setInfoPessoaisAberto(!infoPessoaisAberto)}
        >
          <Ionicons name="person-outline" size={22} color="#fff" />
          <Text style={styles.infoTitle}>Informações pessoais</Text>
          <Ionicons
            name={infoPessoaisAberto ? "chevron-up" : "chevron-down"}
            size={20}
            color="#fff"
          />
        </TouchableOpacity>

        {infoPessoaisAberto && (
          <View style={styles.subInfoContainer}>
            <View style={styles.subInfoRow}>
              <Text style={styles.subLabel}>Nome</Text>
              <Text style={styles.subText}>Erick Magalhães Coutinho</Text>
              <MaterialIcons name="edit" size={20} color="#fff" />
            </View>
            <View style={styles.subInfoRow}>
              <Text style={styles.subLabel}>E-mail</Text>
              <Text style={styles.subText}>coutinhoerick2007@gmail.com</Text>
              <MaterialIcons name="edit" size={20} color="#fff" />
            </View>
          </View>
        )}
      </View>

      {/* Configurações */}
      <View style={styles.section}>
        <View style={{ left: 5, bottom: 5 }}>
          <Text style={{ color: "#fff", fontFamily: "Roboto" }}>Configurações</Text>
        </View>
        <View style={styles.subInfoContainer}>
          <TouchableOpacity style={styles.item}>
            <Ionicons name="lock-closed-outline" size={22} color="#fff" />
            <Text style={styles.itemText}>Mudar senha</Text>
          </TouchableOpacity>

          <View style={styles.item}>
            <Ionicons name="notifications-outline" size={22} color="#fff" />
            <Text style={styles.itemText}>Notificações</Text>
            <Switch
              value={notificacoesAtivadas}
              onValueChange={setNotificacoesAtivadas}
            />
          </View>

          <TouchableOpacity style={styles.item}>
            <Ionicons name="information-circle-outline" size={22} color="#fff" />
            <Text style={styles.itemText}>Sobre</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Navegação inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="help-circle-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Ajuda</Text>
        </TouchableOpacity>
      </View>

      {/* Modal de feedback */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{modalMensagem}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButton}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#002060", paddingTop: 50 },
  status: { color: "#fff", position: "absolute", top: 10, right: 20 },
  profileHeader: { alignItems: "center", marginTop: 20 },

  avatarContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#f00",
  },
  editButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#00C20D",
    borderRadius: 20,
    padding: 5,
  },

  userName: { color: "#fff", fontSize: 18, textAlign: "center", marginTop: 10 },

  section: { marginTop: 30, paddingHorizontal: 20 },
  infoHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#082660",
    borderRadius: 10,
    padding: 12,
  },
  infoTitle: { color: "#fff", fontSize: 16, flex: 1, marginLeft: 10 },

  subInfoContainer: {
    backgroundColor: "#082660",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
  },
  subInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  subLabel: {
    color: "#fff",
    width: 50,
    fontSize: 13,
  },
  subText: {
    color: "#fff",
    flex: 1,
    fontSize: 14,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.5,
  },
  itemText: { color: "#fff", flex: 1, marginLeft: 10 },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#00C20D",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navText: { color: "#fff", textAlign: "center", fontSize: 12 },

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  modalButton: {
    color: "#007BFF",
    fontWeight: "bold",
  },
});
