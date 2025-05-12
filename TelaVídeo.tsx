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

const SubnivelINPCVideo = () => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 360;

  const handleProximo = () => {
    router.push("/proximaTela");
  };

  const handlePular = () => {
    router.push("/home");
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
          <Text style={styles.title}>Sugestão de vídeo</Text>
          <Text style={styles.text}>
            O INPC, ou Índice Nacional de Preços ao Consumidor, acompanha as
            variações dos preços de uma seleção de produtos e serviços,
            enfocando as famílias de baixa renda com ganhos entre 1 a 5 salários
            mínimos. Este índice é também referido como indicador do custo de
            vida, pois tem o objetivo de avaliar o gasto total necessário para
            as famílias brasileiras manterem um determinado padrão de consumo.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.skipButton} onPress={handlePular}>
            <Text style={styles.skipText}>X Pular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={handleProximo}>
            <Text style={styles.nextText}>Próximo ➔</Text>
          </TouchableOpacity>
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
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  text: {
    color: "white",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    gap: 10,
  },
  skipButton: {
    flex: 1,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  nextButton: {
    flex: 1,
    backgroundColor: "#00C20D",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  skipText: {
    color: "white",
    fontWeight: "bold",
  },
  nextText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SubnivelINPCVideo;
