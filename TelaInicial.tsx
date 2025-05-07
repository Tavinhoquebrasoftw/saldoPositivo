import { Button } from "@rneui/themed/dist/Button";
import { router } from "expo-router";
import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Image, StyleSheet, View, Text } from "react-native";

const Saldo4 = require("../assets/Saldo4.png");
const Saldo1 = require("../assets/Saldo1.png");
const Saldo3 = require("../assets/Saldo3.png");

const TelaInicial = () => {

    return (
        <View style={styles.telaInicial}>
            <Image style={styles.saldo24} resizeMode="cover" source={Saldo4} />

            <View style={[styles.telaInicialInner1, styles.telaShadowBox1]} />
            <View style={[styles.telaInicialInner2, styles.telaShadowBox2]} />

            <View style={[styles.telaInicialChild, styles.telaShadowBox]} />
            <View style={[styles.telaInicialItem, styles.rectangleViewShadowBox]} />
            <View style={[styles.telaInicialInner, styles.telaShadowBox]} />
            <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />

            <View>
                <TouchableOpacity
                    style={[styles.button]}
                    onPress={() => router.push('login')}>
                    <Text style={styles.textProximo}>Próximo</Text>
                </TouchableOpacity>

            </View>


            <Image style={[styles.saldo21, styles.saldo21Position]} resizeMode="cover" source={Saldo1} />
            {/* <Image style={styles.cpiaDeSaldo3} resizeMode="cover" source={Saldo3} /> ta em cima de tudo ta atrapalhando o botao*/}
            <Text style={[styles.vamosConversarSobre, styles.saldo21Position]}>Está preparado para aprender financias?</Text>
            <Text style={[styles.sejaBemVindo,]}>Seja Bem-Vindo</Text>

        </View>);
};

const styles = StyleSheet.create({
    telaShadowBox: {
        transform: [
            {
                rotate: "-47deg"
            }
        ],
        width: 933,
        backgroundColor: "rgba(12, 99, 162, 0.78)",
        borderRadius: 20,
        position: "absolute",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)"
    },
    telaShadowBox1: {
        transform: [
            {
                rotate: "-47deg"
            }
        ],
        width: 933,
        backgroundColor: "#D9D9D9",
        borderRadius: 20,
        position: "absolute",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)"
    },
    telaShadowBox2: {
        transform: [
            {
                rotate: "-47deg"
            }
        ],
        width: 933,
        backgroundColor: "#F5F5F5",
        borderRadius: 20,
        position: "absolute",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)"
    },
    textProximo: {
        fontSize: 17,
        letterSpacing: 2,
        lineHeight: 17,
        fontWeight: "700",
        fontFamily: "system-ui",
        display: "flex",
        textAlign: "center",
        color: "#fff",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#00c20d",
        width: "50%",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 15,
        marginLeft: 100,
        marginTop: 750,
    },
    buttonDisabled: {
        backgroundColor: "#66bb6a",
    },
    rectangleViewShadowBox: {
        height: 7,
        backgroundColor: "#00c20d",
        transform: [
            {
                rotate: "-47deg"
            }
        ],
        width: 933,
        borderRadius: 20,
        // position: "absolute",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)"
    },
    rectangleViewShadowBox2: {
        height: 7,
        backgroundColor: "#00c20d",
        transform: [
            {
                rotate: "-47deg"
            }
        ],
        width: 950,
        borderRadius: 20,
        // position: "absolute",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)"
    },
    buttonFlexBox: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    labelTextFlexBox: {
        textAlign: "center",
        color: "#00c20d"
    },
    saldo21Position: {
        left: 28,
        position: "absolute"
    },
    telaChildShadowBox: {
        height: 133,
        width: 394,
        borderRadius: 20,
        position: "absolute",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)"
    },
    saldo24: {
        top: -43,
        left: -49,
        width: 531,
        height: 1062,
        position: "absolute"
    },
    telaInicialChild: {
        top: 100,
        left: -191,
        height: 143
    },
    telaInicialItem: {
        top: 50,
        left: -173
    },
    telaInicialInner: {
        top: 200,
        left: -176,
        height: 148
    },
    telaInicialInner1: {
        top: 0,
        left: -435,
        height: 148,
        
    },
    telaInicialInner2: {
        top: 0,
        left: -500,
        height: 148,
    },
    rectangleView: {
        top: 280,
        left: -87,
    },
    labelText: {
        fontSize: 14,
        fontFamily: "Roboto-Medium",
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        color: "#fff"
    },
    stateLayer: {
        alignSelf: "stretch",
        flexDirection: "row",
        paddingHorizontal: 24,
        paddingVertical: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    saldo21: {
        top: 207,
        width: 336,
        height: 336
    },
    cpiaDeSaldo3: {
        top: 11,
        left: -755,
        width: 1704,
        position: "absolute",
        height: 852
    },
    vamosConversarSobre: {
        top: 694,
        fontSize: 17,
        letterSpacing: 2,
        lineHeight: 17,
        fontWeight: "700",
        fontFamily: "system-ui",
        display: "flex",
        width: 351,
        height: 34,
        textAlign: "center",
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    sejaBemVindo: {
        top: 590    ,
        left: 117,
        fontSize: 24,
        fontFamily: "system-ui",
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: 0,
        color: "#fff",
        position: "absolute"
    },
    telaInicialChild1: {
        top: 158,
        left: -141,
        backgroundColor: "rgba(245, 245, 245, 0.91)"
    },
    telaInicialChild2: {
        top: 111,
        backgroundColor: "#f5f5f5",
        left: -173
    },
    telaInicial: {
        backgroundColor: "#001e57",
        width: "100%",
        overflow: "hidden",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        height: 852,
        flex: 1
    }
});

export default TelaInicial;
