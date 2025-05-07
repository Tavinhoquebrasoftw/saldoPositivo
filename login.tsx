import { router } from "expo-router";
import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert, Image, KeyboardAvoidingView, ImageBackground, Platform } from "react-native";
import { supabase } from "../lib/supabase";
import { Dimensions } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const {width, height} = Dimensions.get("window");

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSignIn() {
        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({
            email: email.trim(),
            password: password
        });

        if (error) {
            Alert.alert('Erro', error.message);
            setLoading(false);
            return;
        }

        setLoading(false);
        router.replace('/(tabs)/TelaMenu');
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
             
            </View>
  
            <View style={[styles.loginBox, { padding: width * 0.05 }]}>
              <Text style={[styles.title, { fontSize: width * 0.07 }]}>Entrar</Text>
  
             
              <View style={styles.inputWrapper}>
              <Entypo name="email" size={18} color="#888" style={styles.inputIcon}/>
               
                <TextInput
                  style={styles.input}
                  placeholder="Digite seu email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
  
              
              <View style={styles.inputWrapper}>
              <AntDesign name="lock" size={18} color="#888" style={styles.inputIcon} />
        
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
  
              <TouchableOpacity onPress={() => router.push("/RecSsenha/esqueci-senha")}>
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
              </TouchableOpacity>
            </View>
  
            <TouchableOpacity onPress={() => router.push("cads")}>
              <Text style={styles.signupText}>
                Ainda não possui uma conta?{" "}
                <Text style={styles.signupLink}>Cadastre-se</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/RecSsenha/esqueci-senha')}>
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
       
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: width * 0.05,
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
    safeArea: {
        flex: 1,
        width: "100%",
        height: "100%",
       resizeMode: "center",
       alignSelf:"center",
        
      },
    loginLayout: {
        borderRadius: 30,
        width: width * 0.92,
        height: height * 0.055,
    },
    loginItem: {
        backgroundColor: "#fff",
        position: "absolute",
    },
    loginChild: {
        alignItems: 'center',
        top: '50%',
        left: width * 0.03,
        backgroundColor: "#001e57",
        width: width * 0.95,
        height: height * 0.2,
        transform: [{ rotate: "0.2deg" }],
        borderRadius: 20,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 4 },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        position: "absolute",
    },
    loginChildShadowBox: {
        height: height * 0.01,
        width: width * 1.2,
        transform: [{ rotate: "-47deg" }],
        backgroundColor: "#00c20d",
        borderRadius: 20,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 4 },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        position: "absolute",
    },
    loginChildLayout: {
        backgroundColor: "rgba(0, 30, 87, 0.78)",
        transform: [{ rotate: "-47deg" }],
        height: height * 0.15,
        width: width * 0.9,
        borderRadius: 20,
        position: "absolute",
    },
    loginChild1: {
        top: 0,
        left: -width * 0.4,
    },
    loginChild2: {
        top: height * 0.8,
        left: width * 0.5,
    },
    loginChild3: {
        top: height * 0.08,
        left: -width * 0.8,
    },
    loginChild4: {
        top: height * 0.75,
        left: width * 0.38,
    },
    iconUserCircleIcon: {
        height: height * 0.15,
        width: width * 0.32,
    },
    rectangleView: {
        top: 0,
        left: -width * 0.5,
        backgroundColor: "rgba(12, 99, 162, 0.78)",
        transform: [{ rotate: "-47deg" }],
        height: height * 0.15,
        width: width * 0.9,
        borderRadius: 20,
        position: "absolute",
    },
    lineView: {
        top: height * 0.85,
        left: width * 0.8,
        borderStyle: "solid",
        borderColor: "#fff",
        borderTopWidth: 0.6,
        width: width * 0.015,
        height: 1,
        position: "absolute",
    },
    iconLayout: {
        top:"-35%",
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
   
});


export default Login;
