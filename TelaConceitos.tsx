import * as Animatable from 'react-native-animatable';
import { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
  Image,
  Modal,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from "react-native";

const { width, height } = Dimensions.get("window");
const BackgroundImage = require("../assets/background.png");

const AnliseDeMercadoTraderEm = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [desafioComplete, setDesafioComplete] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [lives, setLives] = useState(3);
  const [animation, setAnimation] = useState<'bounce' | 'shake' | undefined>(undefined);

  const opcoes = [
    "Subir em uma árvore",
    "Chutar uma bola",
    "Cavar um buraco",
    "Cavar um buraco"
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={BackgroundImage} style={styles.container}>
        <View style={styles.livesContainer}>
          {Array.from({ length: lives }).map((_, index) => (
            <Image key={index} source={require('../assets/Dollar.png')} style={styles.coinIcon} />
          ))}
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <Animatable.View animation={animation} duration={500} style={styles.card}>
            <Text style={styles.title}>Gerente do Banco</Text>

            <Text style={styles.question}>
              Você é incentivado a “passar um tempo ao ar livre” enquanto é levado para fora para brincar
            </Text>
            <Text style={styles.subQuestion}>O que você vai fazer?</Text>

            {opcoes.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  selectedOption === option && styles.selectedOption
                ]}
                onPress={() => setSelectedOption(option)}
                disabled={desafioComplete}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={[styles.answerButton, !selectedOption && styles.disabledButton]}
              disabled={!selectedOption || desafioComplete}
            >
              <Text style={styles.answerText}>Responder</Text>
            </TouchableOpacity>

            {desafioComplete && <Text style={styles.completedText}>Desafio concluído!</Text>}
          </Animatable.View>
        </ScrollView>

        <Modal visible={showFeedback} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>{feedbackMessage}</Text>
              <TouchableOpacity onPress={() => setShowFeedback(false)}>
                <Text>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  livesContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "#0f466c",
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    zIndex: 10,
  },
  coinIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  card: {
    backgroundColor: "rgba(0, 41, 77, 0.9)",
    padding: 20,
    borderRadius: 25,
    alignItems: "center",
    width: width * 0.9,
    maxWidth: 400,
    paddingBottom: 30,
  },
  title: {
    fontSize: width > 500 ? 26 : 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
    textAlign: "center",
  },
  question: {
    fontSize: width > 500 ? 18 : 15,
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  subQuestion: {
    fontSize: width > 500 ? 18 : 16,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: '500',
  },
  optionButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 8,
    width: width * 0.7,
    maxWidth: 300,
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#cce5ff",
  },
  optionText: {
    fontSize: 14,
    color: "#0077cc",
    fontWeight: "bold",
  },
  answerButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
    width: width * 0.5,
    maxWidth: 250,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  disabledButton: {
    opacity: 0.5,
  },
  answerText: {
    color: "white",
    fontWeight: "bold",
  },
  completedText: {
    marginTop: 10,
    color: "#27ae60",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderColor: "#00C20D",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default AnliseDeMercadoTraderEm;
