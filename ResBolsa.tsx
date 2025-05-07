import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import WebView from "react-native-webview";
import { MaterialIcons } from '@expo/vector-icons';

export function Rescard() {

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>Bolsa de Valores</Text>
                </View>


                <View style={styles.resumoContainer}>
                    <View style={styles.titleView1}>
                        <Text style={styles.title1}>Como funciona?</Text>
                    </View>
                    <Text style={styles.resumo}>
                        Plataforma onde se compram e vendem ações de empresas e outros ativos financeiros.
                        Regulada pela B3 (Brasil, Bolsa, Balcão).

                    </Text>
                    <TouchableOpacity style={styles.expandButton} onPress={toggleExpand}>
                        <Text>eqweqw</Text>

                    </TouchableOpacity>

                    <View style={styles.videoContainer}>
                        <WebView
                            source={{ uri: "https://youtu.be/zE3MhwFUpnA?si=zV0tAfrNmHmdGWyj" }}
                            style={styles.video}
                        />
                    </View>
                </View>

                <View style={styles.resumoContainer}>
                    <View style={styles.titleView1}>
                        <Text style={styles.title1}>Como Investir?</Text>
                    </View>
                    <Text style={styles.resumo}>
                        Criar conta em uma corretora;
                        Definir estratégia de investimentos;
                        Escolher ações e acompanhar mercado.
                    </Text>

                    <View style={styles.videoContainer}>
                        <WebView
                            source={{ uri: "https://youtu.be/bcNmZdtMMt8?si=k4oW-85Rydz8RlMl" }}
                            style={styles.video}
                        />
                    </View>
                </View>

                <View style={styles.resumoContainer}>
                    <View style={styles.titleView1}>
                        <Text style={styles.title1}>Início Rápido</Text>
                    </View>
                    <Text style={styles.resumo}>
                        Abra conta em uma corretora;
                        Estude o mercado e os ativos;
                        Para mais informações, acesse site da B3.
                    </Text>
                    <View style={styles.videoContainer}>
                        <WebView
                            source={{ uri: "https://youtu.be/Acgd5fkXDmM?si=WBzW5DQ0OvdfDFbW" }}
                            style={styles.video}
                        />
                    </View>
                </View>

                <View style={styles.resumoContainer}>
                    <TouchableOpacity style={styles.titleView1}
                        onPress={() => router.push("/Desafios/InvestimentosD/DBolsa")}>
                        <Text style={styles.title}>Ir para o Desafio</Text>
                    </TouchableOpacity>
                    <View style={styles.videoContainer1}>

                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#001e57",
        // flexGrow:1,
        minHeight: "100%",
        // padding: 20,
        // backgroundColor: "#f5f5f5",
    },
    expandButton: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    scroll: {
        flexGrow: 1,
        padding: 20,
        gap: "2%"
    },
    titleView: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        width: "100%",
        padding: 15,
        backgroundColor: "#00C20D",
        borderRadius: 15,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: "#fff",
        textShadowColor: "rgba(0, 0, 0, 0.3)",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
    },
    resumoContainer: {
        backgroundColor: "#F5F5F5",
        padding: 20,
        borderRadius: 15,
        elevation: 5,
        width: "100%",
    },
    titleView1: {
        width: "100%",
        paddingVertical: 10,
        backgroundColor: "#00C20D",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    title1: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        textShadowColor: "rgba(0, 0, 0, 0.3)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    resumo: {
        fontSize: 18,
        color: "#001e57",
        textAlign: "justify",
        lineHeight: 24,
    },
    videoContainer: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        overflow: "hidden",
        marginTop: 20,
        elevation: 5,
    },
    video: {
        flex: 1,
    },
    videoContainer1: {
        width: "100%",
        height: 200,
        overflow: "hidden",

    },
});

export default Rescard;