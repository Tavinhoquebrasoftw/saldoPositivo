 

import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Svg, Circle } from "react-native-svg"; // Importando SVG

const Frame = () => {
  const [score, setScore] = useState(0);
  const [nome, setNome] = useState("Erick");
  const [jornada, setJornada] = useState(75); // Valor de exemplo (75%)
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const CircularProgress = ({ percent = 0 }) => {
    const radius = 30;
    const strokeWidth = 6;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (circumference * percent) / 100;

    return (
      <View style={{ width: 70, height: 70, justifyContent: 'center', alignItems: 'center' }}>
        <Svg width={70} height={70}>
          <Circle
            cx="35"
            cy="35"
            r={radius}
            stroke="#0038ff"
            strokeWidth={strokeWidth}
            fill="#001E57"
          />
          <Circle
            cx="35"
            cy="35"
            r={radius}
            stroke="#00B0FF"
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference}, ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            rotation="-90"
            origin="35,35"
          />
        </Svg>
        <Text style={{ position: "absolute", color: "#fff", fontWeight: "bold", fontSize: 12 }}>
          {percent}%
        </Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.profileRow}>
            <View style={styles.profileLeft}>
              <Ionicons
                name="person-circle-outline"
                size={30}
                color="#fff"
                style={{ marginRight: 8 }}
              />
              <Text style={styles.title}>Olá, {nome}</Text>
            </View>
            <Text style={styles.subtitle}>Potencial investidor</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.buttonsContainer}>
            {/* Jornada */}
            <TouchableOpacity style={styles.card}>
              <CircularProgress percent={jornada} />
              <View>
                <Text style={styles.cardTitle}>Jornada</Text>
                <Text style={styles.cardSubtitle}>Dica: não gaste atoa</Text>
              </View>
            </TouchableOpacity>

            {/* Entrar em uma sala */}
            <TouchableOpacity style={styles.card}>
              <View style={[styles.iconCircle, { backgroundColor: "#00FFBF" }]}>
                <Ionicons name="log-in-outline" size={24} color="#000" />
              </View>
              <Text style={styles.cardTitle}>Entrar em uma sala</Text>
            </TouchableOpacity>

            {/* Conceitos */}
            <TouchableOpacity style={styles.card}>
              <View style={[styles.iconCircle, { backgroundColor: "#00FF57" }]}>
                <Text style={{ fontSize: 24, color: "#000", fontWeight: "bold" }}>$</Text>
              </View>
              <Text style={styles.cardTitle}>Conceitos</Text>
            </TouchableOpacity>

            {/* Investimentos */}
            <TouchableOpacity style={styles.card}>
              <View style={[styles.iconCircle, { backgroundColor: "#FFA500" }]}>
                <Ionicons name="stats-chart" size={24} color="#000" />
              </View>
              <Text style={styles.cardTitle}>Investimentos</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

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
          <Ionicons name="help-circle-outline" size={24} color="#fff" />
          <Text style={styles.navText}>Dúvida?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001e57",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    backgroundColor: "#00C20D",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
  },
  profileRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  profileLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonsContainer: {
    marginTop: 30,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#002f7a",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 6,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    left: 10,
  },
  cardSubtitle: {
    color: "#cfd3d6",
    fontSize: 14,
    left: 10,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#00C20D",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 10,
  },
  navText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12,
  },
});

export default Frame;

