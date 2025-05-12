import { router } from "expo-router";
import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert, Image, KeyboardAvoidingView, ImageBackground, Platform, Dimensions } from "react-native";
import { supabase } from "../lib/supabase";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LoginHeader } from "./headerTO";

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
        <ImageBackground 
            source={require("../assets/Login.png")} 
            style={styles.safeArea}
            resizeMode="cover"
        >
            <KeyboardAvoidingView
                style={styles.keyboardAvoidingView}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
            >
                {/* Header */}
                <LoginHeader title="Login" showBackButton={true} />
                
                {/* Main Content */}
                <View style={styles.contentContainer}>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="account-circle" size={width*0.3} color="#001E57" />
                    </View>

                    <View style={styles.loginBox}>
                        <Text style={styles.title}>Entrar</Text>

                        {/* Email Input */}
                        <View style={styles.inputWrapper}>
                            <Entypo name="email" size={18} color="#888" style={styles.inputIcon}/>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite seu email"
                                placeholderTextColor="#888"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>

                        {/* Password Input */}
                        <View style={styles.inputWrapper}>
                            <AntDesign name="lock" size={18} color="#888" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Digite sua senha"
                                placeholderTextColor="#888"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>

                        {/* Login Button */}
                        <TouchableOpacity
                            style={[styles.button, loading && styles.buttonDisabled]}
                            onPress={handleSignIn}
                            disabled={loading}
                        >
                            <Text style={styles.buttonText}>
                                {loading ? "Entrando..." : "Acessar"}
                            </Text>
                        </TouchableOpacity>

                        {/* Forgot Password Link */}
                        <TouchableOpacity 
                            style={styles.forgotPasswordContainer}
                            onPress={() => router.push("/RecSsenha/esqueci-senha")}
                        >
                            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Sign Up Link */}
                    <TouchableOpacity 
                        style={styles.signupContainer}
                        onPress={() => router.push("cads")}
                    >
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
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20, // Add space below header
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
        padding: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
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
    forgotPasswordContainer: {
        alignSelf: 'flex-end',
        marginTop: 10,
    },
    forgotPassword: {
        color: "#ccc",
        fontSize: 14,
    },
    signupContainer: {
        marginTop: 20,
    },
    signupText: {
        fontSize: 14,
        color: "#001e57",
        textAlign: "center",
        fontWeight: 'bold',
    },
    signupLink: {
        textDecorationLine: "underline",
        fontWeight: "bold",
        color: '#00c20d',
    },
});

export default Login;