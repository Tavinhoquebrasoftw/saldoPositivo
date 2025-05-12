import { router } from "expo-router";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const TelaGerenteBanco = () => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 360;

  const handleResposta = (resposta: string) => {
    // Aqui você pode lidar com a lógica da resposta
    console.log("Resposta selecionada:", resposta);
    router.push("/proximaTela"); // exemplo de navegação
  };

  return (
    <ImageBackground style={styles.background}>
      <View
        style={[
          styles.header,
          {
            height: isSmallScreen ? 50 : 60,
            paddingHorizontal: isSmallScreen ? 10 : 15,
          },
        ]}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            name="arrow-back-outline"
            size={isSmallScreen ? 20 : 24}
            color="white"
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.headerTitle,
            { fontSize: isSmallScreen ? 14 : 16 },
          ]}
        >
          INPC
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Gerente do Banco</Text>
          <Text style={styles.subtitle}>
            Você é incentivado a “passar um tempo ao ar livre” enquanto é levado para fora para brincar
          </Text>
          <Text style={styles.question}>O que você vai fazer?</Text>

          {[
            "Subir em uma árvore",
            "Chutar uma bola",
            "Cavar um buraco",
            "Cavar um buraco",
          ].map((opcao, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleResposta(opcao)}
            >
              <Text style={styles.optionText}>{opcao}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#001E57",
  },
  header: {
    backgroundColor: "#00C20D",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "white",
    fontWeight: "bold",
  },
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#00296B",
    borderRadius: 16,
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 12,
  },
  question: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 10,
  },
  optionButton: {
    backgroundColor: "#F2F7FF",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6,
  },
  optionText: {
    color: "#0053B3",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default TelaGerenteBanco;
