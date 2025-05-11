
  import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function PerfilView() {
  const [notificacoesAtivadas, setNotificacoesAtivadas] = useState(true);
  const [infoPessoaisAberto, setInfoPessoaisAberto] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.status}>Potencial investidor</Text>

      {/* Cabeçalho com avatar e QR code */}
      <View style={styles.profileHeader}>
        <View style={styles.avatar}></View>
       
      </View>

      <Text style={styles.userName}>Erick Magalhães Coutinho</Text>

      {/* Seção: Minha Conta */}
      <View style={styles.section}>
      <View style={{left:5, bottom:5, color:'#fff', fontsize:'Roboto'}}>Minha conta</View>
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

        {/* Subitens visíveis apenas se aberto */}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#002060", paddingTop: 50 },
  status: { color: "#fff", position: "absolute", top: 10, right: 20 },
  profileHeader: { alignItems: "center", marginTop: 20 },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#f00", // Apenas cor por enquanto
  },
  qrButton: { position: "absolute", right: 120, top: 10 },
  userName: { color: "#fff", fontSize: 18, textAlign: "center", marginTop: 10 },

  section: { marginTop: 30, paddingHorizontal: 20 },
  infoHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#001b47",
    borderRadius: 10,
    padding: 12,
  },
  infoTitle: { color: "#fff", fontSize: 16, flex: 1, marginLeft: 10 },

  subInfoContainer: {
    backgroundColor: "#001b47",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    marginTop: 5,
  },
  subInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  subLabel: {
    color: "#aaa",
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
    backgroundColor: "#00cc66",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navText: { color: "#fff", textAlign: "center", fontSize: 12 },
});
