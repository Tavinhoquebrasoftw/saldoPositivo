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
    <ImageBackground style={styles.background}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>conceitos</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Card
          icon={icons.conceitos}
          text="INPC - Índice nacional de preços ao consumidor"
          onPress={() => router.push("/Resumos/Gestao/ResConceitos")}
        />
        <Card
          icon={icons.cartao}
          text="Consórcio"
          onPress={() => router.push("/Resumos/Gestao/Rescard")}
        />
        <Card
          icon={icons.carro}
          text="Gestão"
          onPress={() => router.push("/Resumos/Gestao/ResAuto")}
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
    backgroundColor: "#001E57",
  },
  header: {
    backgroundColor: "#29BF12",
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  backArrow: {
    color: "#fff",
    fontSize: 24,
    marginRight: 12,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "lowercase",
  },
  container: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    gap: 20,
  },
  card: {
    backgroundColor: "#002E73",
    borderRadius: 12,
    elevation: 4,
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
    backgroundColor: "#F5A623",
    borderRadius: 8,
    padding: 10,
    marginRight: 16,
  },
  icon: {
    width: 30,
    height: 30,
  },
  cardText: {
    color: "#fff",
    fontSize: 16,
    flexShrink: 1,
  },
});

export default NvelIC;


//Falta colocar o header 
