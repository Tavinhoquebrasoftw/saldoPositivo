import { router } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import { useWindowDimensions } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { width, height } = useWindowDimensions();

  async function handleSignIn() {
    setLoading(true);
    // lógica de login
    setLoading(false);
    router.replace("/(tabs)/TelaMenu");
  }

  return (
    <ImageBackground source={require("../assets/Login.png")} style={styles.safeArea} >
     
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={[styles.contentWrapper, { maxWidth: 500, width: "100%" }]}>
          <View style={styles.iconContainer}>
          <MaterialIcons name="account-circle" size={width*0.4} color="#001E57" />
            {/* <FontAwesome6 name="circle-user" size={width * 0.3} color="#001E57" /> */}
          </View>

          <View style={[styles.loginBox, { padding: width * 0.05 }]}>
            <Text style={[styles.title, { fontSize: width * 0.07 }]}>Entrar</Text>

            {/* Campo de email com ícone */}
            <View style={styles.inputWrapper}>
            <Entypo name="email" size={18} color="#888" style={styles.inputIcon}/>
              {/* <FontAwesome6 name="at" size={18} color="#888" style={styles.inputIcon} /> */}
              <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Campo de senha com ícone */}
            <View style={styles.inputWrapper}>
            <AntDesign name="lock" size={18} color="#888" style={styles.inputIcon} />
              {/* <FontAwesome6 name="lock" size={18} color="#888" style={styles.inputIcon} /> */}
              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity
              style={[styles.button, loading && styles.buttonDisabled]}
              onPress={handleSignIn}
              disabled={loading}
            >
              <Text style={styles.buttonText}>
                {loading ? "Entrando..." : "Acessar"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("Rp")}>
              <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => router.push("cads")}>
            <Text style={styles.signupText}>
              Ainda não possui uma conta?{" "}
              <Text style={styles.signupLink}>Cadastre-se</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: "100%",
    height: "100%",
   resizeMode: "center",
   alignSelf:"center",
    
  },
  contentWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  diagonalBlue1: {
    position: "absolute",
    backgroundColor: "#001e57",
    transform: [{ rotate: "-45deg" }],
    zIndex: -3,
  },
  diagonalBlue2: {
    position: "absolute",
    backgroundColor: "#00358a",
    transform: [{ rotate: "-45deg" }],
    zIndex: -2,
  },
  diagonalGreen: {
    position: "absolute",
    height: 10,
    backgroundColor: "#00c20d",
    transform: [{ rotate: "-45deg" }],
    zIndex: -1,
  },
  iconContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  loginBox: {
    backgroundColor: "#001e57",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
    alignItems: "center",
    width: "90%",
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 14,
    color: "#000",
    ...(Platform.OS === "web" ? {outlineWidth:0} : {}), 
  },
  button: {
    backgroundColor: "#00c20d",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: "#66bb6a",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#ccc",
    fontSize: 14,
    marginTop: 10,
    alignSelf: "flex-end",
  },
  signupText: {
    fontSize: 14,
    color: "#001e57",
    marginTop: 20,
    textAlign: "center",
  },
  signupLink: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});

export default Login;
