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
  useWindowDimensions,
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const icons = {
  conceitos: require("../assets/maoDollar.png"),
  cartao: require("../assets/cartao_resized.png"),
  carro: require("../assets/carro_resized.png"),
  casa: require("../assets/casa_resized.png"),
};

const NvelIC = () => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 360;

  return (
    <ImageBackground style={styles.background}>
      <View style={[styles.header, { height: isSmallScreen ? 50 : 60, paddingHorizontal: isSmallScreen ? 10 : 15 }]}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            name="arrow-back-outline"
            size={isSmallScreen ? 18 : 20}
            color="white"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { fontSize: isSmallScreen ? 13 : 14 }]}>sobre</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.infoBox, { padding: isSmallScreen ? 12 : 16 }]}>
          <Text style={[styles.infoText, { fontSize: isSmallScreen ? 13 : 14, lineHeight: isSmallScreen ? 20 : 22 }]}>
            O Simulador funcionará na dinâmica de pergunta e resposta, tendo a possibilidade de acerto ou erro. 
            O Saldo Positivo é dividido em módulos, em que cada um possui seus próprios assuntos e níveis específicos dentro de si.
          </Text>
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
    backgroundColor: '#00C20D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: 'white',
    lineHeight: 18,
  },
  container: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    gap: 20,
  },
  infoBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
  },
  infoText: {
    color: 'white',
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
