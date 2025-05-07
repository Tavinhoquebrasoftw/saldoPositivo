import { router } from "expo-router";
import * as React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Header from "./header";
const maoDollar = require("../assets/maoDollar.png");
const cartao = require("../assets/cartao_resized.png");
const carro = require("../assets/carro_resized.png");
const casa = require("../assets/casa_resized.png");

const NvelIC = () => {
	return (
		<View style={styles.nvelic}>
			
			<Header/>

			<TouchableOpacity
				style={[styles.nvelicInner1, styles.nvelicShadowBox]}
				onPress={() => router.push('/Resumos/Gestao/ResAuto')}>
				<View style={[styles.nvelicChild7, styles.nvelicChildLayout2]}>
					<Image source={carro} />
					<Text style={styles.erick}>Automóvel?</Text>
					<Image style={{marginLeft:200}} source={carro}/>
				</View>
			</TouchableOpacity>

			<TouchableOpacity
				style={[styles.nvelicInner2, styles.nvelicShadowBox]}
				onPress={() => router.push("/Resumos/Gestao/Rescard")}>
				<View style={[styles.nvelicChild7, styles.nvelicChildLayout2]}>
					<Image source={cartao} />
					<Text style={styles.erick}>Cartão? Como ter?</Text>
				</View>
			</TouchableOpacity>

			<TouchableOpacity
				style={[styles.nvelicInner3, styles.nvelicShadowBox]}
				onPress={() => router.push("/Resumos/Gestao/ResConceitos")}>
				<View style={[styles.nvelicChild7, styles.nvelicChildLayout2]}>
					<Image source={maoDollar} />
					<Text style={styles.erick}>Conceitos</Text>
				</View>
			</TouchableOpacity>

			<TouchableOpacity
				style={[styles.nvelicInner4, styles.nvelicShadowBox]}
				onPress={() => router.push("/Resumos/Gestao/ResImovel")}>
				<View style={[styles.nvelicChild7, styles.nvelicChildLayout2]}>
					<Image source={casa} />
					<Text style={styles.erick}>Imóveis? Aprenda!</Text>
				</View>
			</TouchableOpacity>




		</View>

	);
};

const styles = StyleSheet.create({
	nvelicShadowBox1: {
		transform: [
			{
				rotate: "137.7deg"
			}
		],
		height: 127,
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
	
	imagebank: {
		marginLeft: 10,
		marginTop: 5,
	},
	erick: {
		top: 20,
		left: 150,
		fontSize: 20,
		fontWeight: "800",
		fontFamily: "system-ui",
		color: "#f5f5f5",
		textAlign: "center",

		position: "absolute"
	},
	nvelicShadowBox: {
		height: 106,
		width: 372,
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#000",
		left: 11,
		borderRadius: 20,
		shadowOpacity: 0.15, 
		elevation: 8, 
		shadowRadius: 10, 
		shadowOffset: {
			width: 0,
			height: 6, 
		},
		shadowColor: "rgba(0, 0, 0, 0.2)", 
		position: "absolute"
	},
	
	nvelicChild5ShadowBox: {
		left: 19,
		height: 106,
		width: 372,
		borderStyle: "solid",
		shadowOpacity: 1,
		elevation: 4,
		shadowRadius: 4,
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowColor: "rgba(0, 0, 0, 0.25)"
	},
	nvelicChildLayout4: {
		height: 128,
		width: 376,
		backgroundColor: "rgba(2, 78, 133, 0.92)",
		borderRadius: 20,
		position: "absolute"
	},
	nvelicChildLayout3: {
		backgroundColor: "rgba(2, 108, 185, 0.92)",
		width: 376,
		borderRadius: 20,
		position: "absolute"
	},
	nvelicChild5Bg: {
		backgroundColor: "rgba(0, 30, 87, 0.68)",
		borderRadius: 20,
		position: "absolute"
	},
	nvelicChildLayout2: {
		height: 88,
		width: 90,
		borderRadius: 20,
		position: "absolute"
	},
	iconLayout: {
		height: 71,
		width: 71,
		position: "absolute"
	},
	consrcioTypo: {
		height: 63,
		justifyContent: "center",
		alignItems: "center",
		display: "flex",
		textAlign: "center",
		color: "#f5f5f5",
		fontFamily: "Sitara",
		fontWeight: "700",
		lineHeight: 20,
		letterSpacing: 0,
		fontSize: 24,
		position: "absolute"
	},
	nvelicChildLayout: {
		height: 2,
		width: 158,
		borderRadius: 8,
		left: 150,
		position: "absolute"
	},
	textTypo: {
		textAlign: "left",
		color: "#fff",
		fontFamily: "Inter-Bold",
		fontSize: 11,
		fontWeight: "700",
		position: "absolute"
	},
	nvelicChild: {
		top: 242,
		left: 495,
		backgroundColor: "rgba(0, 194, 13, 0.5)",
		width: 777
	},
	nvelicItem: {
		top: 35,
		left: 493,
		backgroundColor: "#00c20d",
		width: 952
	},
	nvelicInner1: {
		top: 400,
		backgroundColor: "#001e57"
	},
	nvelicInner: {
		top: 100,
		backgroundColor: "#001e57"
	},
	nvelicInner2: {
		top: 225,
		backgroundColor: "#001e57"
	},

	nvelicInner3: {
		top: 50,
		backgroundColor: "#001e57"
	},

	nvelicInner4: {
		top: 580,
		backgroundColor: "#001e57"
	},

	rectangleView: {
		borderColor: "#00c20d",
		borderWidth: 3,
		top: 153,
		backgroundColor: "#0c63a2",
		left: 19,
		borderRadius: 20,
		position: "absolute"
	},
	rectangleIcon: {
		top: 0,
		left: 0,
		borderRadius: 6,
		position: "absolute"
	},
	nvelicChild1: {
		top: 313,
		left: 7
	},
	nvelicChild2: {
		top: 457,
		left: 6
	},
	nvelicChild3: {
		top: 338,
		left: 15,
		height: 103
	},
	nvelicChild4: {
		top: 459,
		height: 118,
		left: 7
	},
	iconButtonToggleable: {
		top: 8,
		width: 48,
		height: 48,
		left: 11,
		position: "absolute"
	},
	cpiaDeSaldo23: {
		top: 610,
		left: -765,
		width: 2160,
		height: 1080,
		position: "absolute"
	},
	nvelicChild5: {
		top: 321,
		left: 19,
		height: 106,
		width: 372,
		borderStyle: "solid",
		shadowOpacity: 1,
		elevation: 4,
		shadowRadius: 4,
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowColor: "rgba(0, 0, 0, 0.25)",
		borderWidth: 1,
		borderColor: "#000",
		backgroundColor: "rgba(0, 30, 87, 0.68)"
	},
	nvelicChild6: {
		top: 462,
		backgroundColor: "rgba(0, 30, 87, 0.96)"
	},
	rectanglePressable: {
		width: 377,
		height: 109,
		left: 17,
		top: 153
	},
	nvelicChild7: {
		top: 8,
		flexDirection: 'row',
		backgroundColor: "rgba(104, 255, 114, 0.78)",
		left: 8,
		shadowOpacity: 1,
		elevation: 4,
		shadowRadius: 4,
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowColor: "rgba(0, 0, 0, 0.25)",
		height: 88,
		width: 90
	},
	nvelicChild72: {
		top: 8,
		backgroundColor: "#FFC107",
		left: 8,
		shadowOpacity: 1,
		elevation: 4,
		shadowRadius: 4,
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowColor: "rgba(0, 0, 0, 0.25)",
		height: 88,
		width: 90
	},
	nvelicChild73: {
		top: 8,
		backgroundColor: "#6EBBFF",
		left: 8,
		shadowOpacity: 1,
		elevation: 4,
		shadowRadius: 4,
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowColor: "rgba(0, 0, 0, 0.25)",
		height: 88,
		width: 90
	},
	nvelicChild8: {
		top: 326,
		left: 20,
		backgroundColor: "rgba(255, 193, 7, 0.78)"
	},
	nvelicChild9: {
		top: 472,
		backgroundColor: "#6ebbff",
		left: 17
	},
	mao1Icon: {
		top: 485,
		left: 26
	},
	maoSegurandoODolar1Icon: {
		top: 170,
		left: 38
	},
	conceitos: {
		top: 178,
		left: 111,
		width: 236
	},
	gesto: {
		top: 352,
		left: 109,
		height: 51,
		width: 236,
		justifyContent: "center",
		alignItems: "center",
		display: "flex",
		textAlign: "center",
		color: "#f5f5f5",
		fontFamily: "Sitara",
		fontWeight: "700",
		lineHeight: 20,
		letterSpacing: 0,
		fontSize: 24,
		position: "absolute"
	},
	consrcio: {
		top: 489,
		left: 137,
		width: 162
	},
	bankBuilding1Icon: {
		top: 333,
		left: 29
	},
	checkSquareIcon: {
		top: 194,
		left: 329,
		position: "absolute",
		overflow: "hidden"
	},
	nvelicChild10: {
		backgroundColor: "#d9d9d9",
		height: 2,
		width: 158,
		borderRadius: 8,
		left: 150,
		top: 231
	},
	nvelicChild11: {
		backgroundColor: "#2589d0",
		height: 2,
		width: 158,
		borderRadius: 8,
		left: 150,
		top: 231
	},
	text: {
		top: 230,
		left: 320
	},
	nvelicChild12: {
		top: 402,
		backgroundColor: "#d9d9d9",
		height: 2,
		width: 158,
		borderRadius: 8,
		left: 150
	},
	text1: {
		top: 397,
		left: 316
	},
	nvelic: {
		backgroundColor: "#f5f5f5",
		flex: 1,
		width: "100%",
		height: 852,
		overflow: "hidden"
	}
});
export default NvelIC;
