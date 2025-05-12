import { router } from "expo-router";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  ImageSourcePropType,
} from "react-native";
import { LoginHeader } from "../app/headerTO"; // Make sure this path is correct

const icons = {
  conceitos: require("../assets/maoDollar.png"),
  cartao: require("../assets/cartao_resized.png"),
  carro: require("../assets/carro_resized.png"),
  casa: require("../assets/casa_resized.png"),
};

const NvelIC = () => {
  return (
    <ImageBackground 
      source={require("../assets/NivelIC.png")} 
      style={styles.background}
    >
      {/* Added Header Component */}
      <LoginHeader
        title="Conceitos Financeiros" 
        showBackButton={true}
      />
      
      <ScrollView 
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
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

type CardProps = {
  icon: ImageSourcePropType;
  text: string;
  onPress: () => void;
};

const Card = ({ icon, text, onPress }: CardProps) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.cardContent}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
      <Text style={styles.cardText}>{text}</Text>
      <View style={styles.arrowContainer}>
       
      </View>
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
    paddingTop: 20, // Reduced top padding since header is present
    paddingBottom: 40,
    paddingHorizontal: 16,
    gap: 20,
    marginTop: 60, // Added margin to prevent content from being hidden behind header
  },
  card: {
    backgroundColor: "#001e57",
    borderRadius: 20,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(0, 194, 13, 0.3)",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  iconContainer: {
    backgroundColor: "rgba(0, 194, 13, 0.2)",
    borderRadius: 16,
    padding: 12,
    marginRight: 16,
    borderWidth: 1,
    borderColor: "rgba(0, 194, 13, 0.5)",
  },
  icon: {
    width: 40,
    height: 40,
  },
  cardText: {
    color: "#f5f5f5",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  arrowContainer: {
    padding: 8,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: "#00C20D",
  },
});

export default NvelIC;