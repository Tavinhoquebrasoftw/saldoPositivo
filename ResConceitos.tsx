import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import WebView from "react-native-webview";
import {MaterialIcons} from '@expo/vector-icons';

export function Rescard() {

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = ()=> {
        setExpanded(!expanded);
    };
    return (
        <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Conceitos Introdutórios</Text>
            </View>


            <View style={styles.resumoContainer}>
                <View style={styles.titleView1}>
                    <Text style={styles.title1}>Orçamento e planejamento financeiro</Text>
                </View>
                <Text style={styles.resumo}>
                Criar um orçamento mensal é fundamental para controlar receitas e despesas. Isso ajuda a evitar gastos excessivos e a poupar dinheiro.
                </Text>
                <TouchableOpacity style={styles.expandButton} onPress={toggleExpand}>
                    <Text>eqweqw</Text>

                </TouchableOpacity>

                <View style={styles.videoContainer}>
                    <WebView
                        source={{ uri: "https://youtu.be/c1-5Gu8b66E?si=Ox56aGV3OcnrfpTZ" }}
                        style={styles.video}
                    />
                </View>
            </View>

            <View style={styles.resumoContainer}>
                <View style={styles.titleView1}>
                    <Text style={styles.title1}>Importância da reserva de emergência</Text>
                </View>
                <Text style={styles.resumo}>
                Ter um fundo de emergência evita problemas financeiros em situações inesperadas, como perda de emprego ou emergências médicas. O ideal é ter pelo menos de 3 a 6 meses de despesas cobertas.
                </Text>

                <View style={styles.videoContainer}>
                    <WebView
                        source={{ uri: "https://youtu.be/Dnl6Y4jghbo?si=QytGrCCf7b_b6MXP" }}
                        style={styles.video}
                    />
                </View>
            </View>

            <View style={styles.resumoContainer}>
                <View style={styles.titleView1}>
                    <Text style={styles.title1}>Diferença entre ativos e passivos</Text>
                </View>
                <Text style={styles.resumo}>
                Ativos geram renda ou aumentam de valor ao longo do tempo (exemplo: investimentos, imóveis alugados). Passivos são despesas que não geram retorno financeiro (exemplo: carro, empréstimos).
                </Text>

                <View style={styles.videoContainer}>
                    <WebView
                        source={{ uri: "https://youtu.be/wC-tHDVLsYw?si=XhgzjorJ-yLhpFDN" }}
                        style={styles.video}
                    />
                </View>
            </View>

            <View style={styles.resumoContainer}>
                <TouchableOpacity style={styles.titleView1}
                onPress={()=> router.push("/Desafios/GestaoD/TelaConceitos")}>
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
        backgroundColor:"#001e57",
        // flexGrow:1,
        minHeight:"100%",
        // padding: 20,
        // backgroundColor: "#f5f5f5",
    },
    expandButton: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    scroll:{
        flexGrow:1,
        padding:20,
gap:"2%"
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
        shadowColor:"black",
        shadowOpacity:4,
        shadowOffset:{
            width:0,
            height:2,
        },
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