import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const background = require("../../assets/Saldo3.png");

const Ajuda = () => {
  return (
    <View style={styles.container}>
      <Image source={background} style={styles.backgroundImage} />
      <Text style={styles.title}>Sobre</Text>

      <View style={styles.contentContainer}>
        <Text style={styles.description}>
          O Saldo Positivo funcionará na dinâmica de pergunta e resposta, tendo a possibilidade de acerto ou erro. O Saldo Positivo é dividido em módulos, em que cada um possui seus próprios assuntos e níveis específicos dentro de si.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001e57",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginTop: 58,
    fontFamily: "system-ui",
  },
  contentContainer: {
    width: "85%",
    backgroundColor: "#f5f5f5",
    borderRadius: 27,
    borderWidth: 3,
    borderColor: "#00c20d",
    padding: 20,
    marginTop: 20,
  },
  description: {
    fontSize: 20,
    lineHeight: 30,
    color: "#001E57",
    textAlign: "center",
    fontFamily: "system-ui",
  },
});

export default Ajuda;