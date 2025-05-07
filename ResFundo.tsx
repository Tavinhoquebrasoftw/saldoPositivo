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
                    <Text style={styles.title}>Fundo Imobiliário</Text>
                </View>


                <View style={styles.resumoContainer}>
                    <View style={styles.titleView1}>
                        <Text style={styles.title1}>Como funciona?</Text>
                    </View>
                    <Text style={styles.resumo}>
                        Fundos que aplicam dinheiro em imóveis e distribuem lucros aos investidores.
                        Pagamento mensal de dividendos, isento de Imposto de Renda para pessoas físicas.
                    </Text>
                    <TouchableOpacity style={styles.expandButton} onPress={toggleExpand}>
                        <Text>eqweqw</Text>

                    </TouchableOpacity>

                    <View style={styles.videoContainer}>
                        <WebView
                            source={{ uri: "https://youtu.be/z3fTzc0q10M?si=KXKT5yZsBdvu4vKY" }}
                            style={styles.video}
                        />
                    </View>
                </View>

                <View style={styles.resumoContainer}>
                    <View style={styles.titleView1}>
                        <Text style={styles.title1}>Como investir?</Text>
                    </View>
                    <Text style={styles.resumo}>
                        Criar conta em uma corretora.
                        Pesquisar e escolher FIIs conforme perfil de risco.
                        Acompanhar rendimento dos fundos.
                    </Text>

                    <View style={styles.videoContainer}>
                        <WebView
                            source={{ uri: "https://youtu.be/4_6uq6JHAVo?si=0V1VylrUc8WYv-Rx" }}
                            style={styles.video}
                        />
                    </View>
                </View>

                <View style={styles.resumoContainer}>
                    <View style={styles.titleView1}>
                        <Text style={styles.title1}>Início Rápido</Text>
                    </View>
                    <Text style={styles.resumo}>
                        Abra conta em uma corretora.
                        Selecione e invista em FIIs.
                        Para mais informações, consulte sites financeiros.
                    </Text>

                    <View style={styles.videoContainer}>
                        <WebView
                            source={{ uri: "https://youtu.be/6oZ12SQ9Wlg?si=087N91LR10VAMWrO" }}
                            style={styles.video}
                        />
                    </View>
                </View>

                <View style={styles.resumoContainer}>
                    <TouchableOpacity style={styles.titleView1}
                        onPress={() => router.push("/Desafios/InvestimentosD/TelaFundo")}>
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