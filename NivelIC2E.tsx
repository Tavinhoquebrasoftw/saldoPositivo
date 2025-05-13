import { router } from "expo-router";
import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const icons = {
  conceitos: require("../assets/maoDollar.png"),
  tesouro: require("../assets/tesourod.png"),
  carro: require("../assets/bank.png"),
  bolsa: require("../assets/grafico.png"),
};

const NvelIC = () => {
  return (
    <ImageBackground style={styles.background}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
           <Ionicons name="arrow-back-outline" size={20} color="white" style={{marginRight:15}} />
          {/* <Text style={styles.backArrow}>←</Text> */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Investimentos</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Card
          icon={icons.conceitos}
          text="Conceitos e taxas"
          iconColor={"#00FF95"}
          onPress={() => router.push("/Resumos/Gestao/ResConceitos")}
        />
        <Card
          icon={icons.tesouro}
          text="Tesouro direto"
          iconColor={"#FFB800"}
          onPress={() => router.push("/Resumos/Gestao/Rescard")}
        />
        <Card
          icon={icons.carro}
          text="Fundo imobiliário"
          iconColor={"#E85550"}
          onPress={() => router.push("/Resumos/Gestao/ResAuto")}
        />

        <Card
          icon={icons.bolsa}
          text="Bolsa de valores"
          iconColor={"#D336F6"}
          onPress={() => router.push("/Resumos/Gestao/ResAuto")}
        />
      </ScrollView>
    </ImageBackground>
  );
};

const Card = ({ icon, text, onPress, iconColor }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.cardContent}>
      <View style={[styles.iconContainer, { backgroundColor: iconColor }]}>
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
   height: 60,
    backgroundColor: '#00C20D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  backArrow: {
    color: 'white',
    fontSize: 10,
    marginRight: 6,
  },
  headerTitle: {
     color: 'white',
    // fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 18,
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
