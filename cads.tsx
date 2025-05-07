
import { Link, router } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ImageBackground, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, Switch } from "react-native";
import { supabase } from "../lib/supabase";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const IconUser = require("../assets/IconUser.png");

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isProfessor, setIsProfessor] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSignUp() {
        setLoading(true);

            const { data, error } = await supabase.auth.signUp({
              email: email,
              password: password,
              options: {
                data: {
                  name: name,
                  is_professor: isProfessor, // isso pode ser true ou false
                },
              },
            });
          
            if (error) {
              Alert.alert('Erro', error.message);
              setLoading(false);
              return;
            }

        setLoading(false);
        router.replace('login');
    }

    return (
        <KeyboardAvoidingView 
        behavior="padding"
        style={styles.container}
        >
            <Text style={styles.title}>Cadastrar</Text>
            <Image source={IconUser} style={[styles.iconUserCircleIcon, styles.iconLayout]} />
        

            <View style={[styles.lineView, styles.lineViewLayout]} />
            <View style={[styles.cadastroChild1, styles.lineViewLayout]} />
            <View style={[styles.cadastroChild2, styles.cadastroChildLayout]} />
            <View style={[styles.cadastroChild3, styles.cadastroChildLayout]} />
    
            <View style={styles.loginChild}>
                
            <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={name}
                    onChangeText={setName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>Sou Professor</Text>
                    <Switch
                        value={isProfessor}
                        onValueChange={setIsProfessor}
                    /> 
                </View>

            <TouchableOpacity
                style={[styles.button, loading && styles.buttonDisabled]}
                onPress={handleSignUp}
                disabled={loading}
            >
             <Text style={styles.buttonText}>{loading ? 'Carregando...' : 'Cadastrar'}</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => router.push('login')}>
                <Text style={styles.signupText}>Já possui uma conta? <Text style={styles.signupLink}>Faça login</Text></Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>


            
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    switchLabel: {
        fontSize: 16,
    },
    signupLink: {
        textDecorationLine: "underline",
        fontWeight: "bold",
    },
    signupText: {
        fontSize: width * 0.035,
        color: "#001e57",
        top:"500%"
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    inputContainer: {
        width: "100%",

    },
    loginChild1: {
        alignItems: 'center',
        top: 310,
        left: 10,
        backgroundColor: "#001e57",
        width: 374,
        height: 200,
        transform: [
            {
                rotate: "0.2deg"
            }
        ],
        borderRadius: 20,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        position: "absolute"
    },
    loginChild: {
        alignItems: 'center',
        backgroundColor: "#001e57",
        width: "100%",
        maxWidth: 400,
        padding: 20,
        borderRadius: 20,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 4 },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        bottom:"-10%",
    },
    cadastroChild1: {
        left: "30%",
    },
    lineViewLayout: {
        width: 6,
        borderTopWidth: 0.6,
        borderColor: "#fff",
        borderStyle: "solid",
        top: 663,
        height: 1,
        position: "absolute"
    },
    lineView: {
        left: 246
    },
    iconLayout: {
        top: "-20%",
        marginRight: "0%",
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden"
    },
    iconUserCircleIcon: {
        height: height * 0.15,
        width: width * 0.32,
    },
    cadastroChildLayout: {
        height: 127,
        width: 394,
        borderRadius: 20,
        position: "absolute"
    },
    cadastroChild3: {
        top: -70,
        left: "50%",
        backgroundColor: "rgba(12, 99, 162, 0.78)",
        transform: [
            {
                rotate: "44.5deg",
            }
        ]
    },
    cadastroChild2: {
        top: -70,
        left: "40%",
        backgroundColor: "rgba(0, 30, 87, 0.78)",
        transform: [
            {
                rotate: "44.5deg"
            }
        ]
    },
    framecadastroBg: {
        backgroundColor: "#00c20d",
        position: "absolute"
    },
    rectangleView: {
        width: 933,
        height: 7,
        transform: [
            {
                rotate: "44.5deg"
            }
        ],
        borderRadius: 20,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#001e57",
        top:"37%",
        position:"absolute"
    },
    inputWrapper: {
        marginTop: 15,
        width: "100%",

    },
    input: {
        width: "100%",
        padding: 12,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        backgroundColor: "#fff",
        marginTop: 10,
    },
    button: {
        backgroundColor: "#00c20d",
        width: "100%",
        padding: 12,
        top:10,
        borderRadius: 8,
        alignItems: "center",
        bottom:"-15%",
    },
    buttonDisabled: {
        backgroundColor: "#66bb6a",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    link: {
        color: "#001e57",
        fontSize: 14,
        textDecorationLine: "underline",
        textAlign: "center",
    },
});
