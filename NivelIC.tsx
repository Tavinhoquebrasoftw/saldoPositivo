import { router } from "expo-router";
import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground, ScrollView } from "react-native";

const icons = {
  conceitos: require("../assets/maoDollar.png"),
  cartao: require("../assets/cartao_resized.png"),
  carro: require("../assets/carro_resized.png"),
  casa: require("../assets/casa_resized.png"),
};

const NvelIC = () => {
  return (
    <ImageBackground source={require("../assets/NívelIC.png")} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Card
          icon={icons.conceitos}
          text="Conceitos"
          onPress={() => router.push("/Resumos/Gestao/ResConceitos")}
        />
        <Card
          icon={icons.cartao}
          text="Cartão?\nComo ter?"
          onPress={() => router.push("/Resumos/Gestao/Rescard")}
        />
        <Card
          icon={icons.carro}
          text="Automóvel?"
          onPress={() => router.push("/Resumos/Gestao/ResAuto")}
        />
        <Card
          icon={icons.casa}
          text="Imóveis?\nAprenda!"
          onPress={() => router.push("/Resumos/Gestao/ResImovel")}
        />
      </ScrollView>
    </ImageBackground>
  );
};

const Card = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.cardContent}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
      <Text style={styles.cardText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
	width: "100%",
	height: "100%",
  },
  container: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    gap: 20,
  },
  card: {
    backgroundColor: "#001e57",
    borderRadius: 20,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  iconContainer: {
    backgroundColor: "rgba(104, 255, 114, 0.78)",
    borderRadius: 16,
    padding: 10,
    marginRight: 16,
  },
  icon: {
    width: 50,
    height: 50,
  },
  cardText: {
    color: "#f5f5f5",
    fontSize: 18,
    fontWeight: "bold",
    flexShrink: 1,
  },
});

export default NvelIC;

