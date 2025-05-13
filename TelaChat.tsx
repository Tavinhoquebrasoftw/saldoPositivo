import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AjudaView() {
  const [duvida, setDuvida] = useState("");

  return (
    <View style={styles.container}>
      {/* Cabeçalho verde com título */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Tire a sua dúvida</Text>
      </View>

      {/* Ilustração */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require("../assets/Chat.png")} // Substitua pelo caminho da sua imagem
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* Campo de dúvida */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="digite sua dúvida"
          placeholderTextColor="#ccc"
          value={duvida}
          onChangeText={setDuvida}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="arrow-up-circle-outline" size={24} color="#fff" />
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
          <Ionicons name="help-circle" size={24} color="#fff" />
          <Text style={styles.navText}>Ajuda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002060",
  },
  header: {
    backgroundColor: "#00C20D",
    padding: 15,
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  illustrationContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  illustration: {
    width: 180,
    height: 180,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#001a4d",
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    color: "#fff",
    paddingVertical: 10,
     ...(Platform.OS === "web" ? {outlineWidth:0} : {}), 
  },
  sendButton: {
    padding: 5,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#00C20D",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12,
  },
});
