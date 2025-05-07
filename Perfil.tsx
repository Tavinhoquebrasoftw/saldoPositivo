
import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity, Alert, ImageBackground } from "react-native";
const Vector = require("../../assets/pen.png");
const Iconusercircleicon = require("../../assets/IconUser.png");
const moedaCartola = require("../../assets/moedaCartola.png");
const Invest = require("../../assets/Invest.png");
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { Link, router } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";
import Ionicons from '@expo/vector-icons/Ionicons';
const background = require("../../assets/Saldo3.png");

export function Perfil() {

	const [score, setScore] = useState(0);
	const [name, setName] = useState('');

	useEffect(() => {
		const fetchScore = async () => {
			const { data, error } = await supabase.auth.getUser();
			if (error || !data?.user) {
				console.error('Erro ao obter usuário:', error);
				return;
			}

			const { data: userData, error: fetchError } = await supabase
				.from('users')
				.select('score')
				.eq('id', data.user.id)
				.single();

			if (fetchError) {
				console.error('Erro ao buscar pontuação:', fetchError);
			} else {
				setScore(userData.score);
			}


		};

		fetchScore();
	}, []);

	useEffect(() => {
		const fetchName = async () => {
			const { data, error } = await supabase.auth.getUser();
			if (error || !data?.user) {
				console.error('Erro ao obter usuário:', error);
				return;
			}

			const { data: userData, error: fetchError } = await supabase
				.from('users')
				.select('name')
				.eq('id', data.user.id)
				.single();

			if (fetchError) {
				console.error('Erro ao buscar pontuação:', fetchError);
			} else {
				setName(userData.name);
			}

		};
		fetchName();

	}, []);

	const { setAuth, user } = useAuth();

	async function handleSignOut() {
		const { error } = await supabase.auth.signOut();
		setAuth(null)

		if (error) {
			Alert.alert("Error", error.message)
			return;
		}
	}

	return (
		<View style={styles.perfil}>
			<ImageBackground source={background}>
				<View style={[styles.perfilChild, styles.perfilChildLayout1]} />
				<View style={[styles.perfilItem, styles.perfilChildLayout1]} />

				<View style={[styles.lineView, styles.lineViewLayout]} />
				<View style={[styles.cadastroChild2, styles.cadastroChildLayout]} />
				<View style={[styles.cadastroChild3, styles.cadastroChildLayout]} />
				<View style={[styles.rectangleView1, styles.framecadastroBg]} />


				<TouchableOpacity style={styles.editarPerfilParent} onPress={() => router.push("EditPerfil")}>
					<Text style={[styles.editarPerfil, styles.erickTypo]}>Editar perfil</Text>
					<Image source={Vector} width={17} height={15} />
				</TouchableOpacity>
				<View style={styles.infoUser1}>
					<Text style={[styles.infoUser, styles.erickTypo]}>{name}</Text>
					<Text style={[styles.infoUser, styles.erickTypo]}>{user?.email}</Text>
					{/* <Text style={[styles.infoUser, styles.erickTypo]}>Pontuação: {score}</Text> */}
				</View>


				<View style={styles.iconUserCircleIcon}>
					<Ionicons style={styles.icon1} name="person-circle-outline" color="F5F5F5" size={50} />
				</View>


				<View style={[styles.perfilInner, styles.perfilChildLayout1]} />
				<View style={[styles.rectangleView, styles.perfilChildLayout1]} />
				<View style={[styles.perfilChild1, styles.perfilChildLayout1]} />

				<View style={[styles.perfilChild3, styles.perfilChildShadowBox]} />
				<View style={[styles.mduloInvestimentosParent, styles.mduloParentShadowBox]}></View>
				<View style={styles.perfilChild6} />
				<TouchableOpacity
					style={[styles.button]}
					onPress={handleSignOut}>
					<Text style={styles.textProximo}>Sair</Text>
				</TouchableOpacity>
				{/* <View style={[styles.perfilChild4, styles.perfilChildLayout]} />
			<View style={[styles.perfilChild5, styles.perfilChildLayout]} /> */}
				<View style={[styles.perfilInner, styles.perfilChildLayout1]} />
				<View style={[styles.rectangleView, styles.perfilChildLayout1]} />
				<View style={[styles.perfilChild1, styles.perfilChildLayout1]} />
				<View style={[styles.perfilChild, styles.perfilChildLayout1]} />
				<View style={[styles.perfilItem, styles.perfilChildLayout1]} />
				<View style={[styles.perfilChild3, styles.perfilChildShadowBox]} />
			</ImageBackground>
		</View>);
};

const styles = StyleSheet.create({
	perfilChildLayout1: {
		transform: [
			{
				rotate: "-128.2deg"
			}
		],
		width: 394,
		borderRadius: 20,
		position: "absolute"
	},
	framecadastroBg: {
		backgroundColor: "#00c20d",
		position: "absolute"
	},
	cadastroChildLayout: {
		height: 127,
		width: 394,
		borderRadius: 20,
		position: "absolute"
	},
	cadastroChild3: {
		top: -70,
		left: 160,
		backgroundColor: "#F5F5F5",
		transform: [
			{
				rotate: "44.5deg",
			}
		]
	},
	cadastroChild1: {
		left: 257
	},
	cadastroChild2: {
		top: -55,
		left: 160,
		backgroundColor: "#D4CDCD",
		transform: [
			{
				rotate: "44.5deg"
			}
		]
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
	infoUser1:
	{
		marginTop: 190,
		alignItems: "center",
	},
	infoUser: {
		textAlign: "center",
		alignItems: "center",
		padding: 12,
		color: "#F5F5F5",
	},
	container: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: 50,
		padding: 20,
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
		backgroundColor: "#e11616",
		width: "50%",
		padding: 12,
		borderRadius: 8,
		alignItems: "center",
		marginLeft: 100,
		marginTop: 300,
	},
	profileImage: {
		width: 100,
		height: 100,
		marginTop: 20,
		borderRadius: 50,
	},
	input: {
		width: "80%",
		height: 40,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 8,
		paddingHorizontal: 10,
		marginVertical: 10,
	},

	erickTypo: {
		textAlign: "left",
		fontFamily: "system-ui",
		fontWeight: "700",
		lineHeight: 20,
		letterSpacing: 0
	},
	perfilChildShadowBox: {
		height: 7,
		width: 933,
		backgroundColor: "#00c20d",
		shadowOpacity: 1,
		elevation: 4,
		shadowRadius: 4,
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowColor: "rgba(0, 0, 0, 0.25)",
		borderRadius: 20,
		position: "absolute"
	},
	perfilChildLayout: {
		height: 109,
		width: 377,
		borderWidth: 3,
		borderColor: "#00c20d",
		borderStyle: "solid",
		backgroundColor: "#f5f5f5",
		borderRadius: 20,
		position: "absolute"
	},
	saldo63Layout: {
		height: 87,
		width: 66,
		borderRadius: 8,
		left: 21,
		position: "absolute"
	},
	mduloParentShadowBox: {
		left: 98,
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
	perfilChild: {
		top: 1021,
		left: 103,
		height: 133,
		transform: [
			{
				rotate: "-128.2deg"
			}
		],
		width: 394,
		borderRadius: 20,
		backgroundColor: "rgba(255, 255, 255, 0.81)"
	},
	perfilItem: {
		top: 1037,
		left: 146,
		height: 123,
		transform: [
			{
				rotate: "-128.2deg"
			}
		],
		width: 394,
		borderRadius: 20,
		backgroundColor: "rgba(255, 255, 255, 0.81)"
	},
	editarPerfil: {
		fontSize: 15,
		color: "#f5f5f5"
	},
	vectorIcon: {},
	editarPerfilParent: {
		top: 332,
		left: "37%",
		width: 116,
		height: 20,
		flexDirection: "row",
		gap: 8,
		position: "absolute",
		overflow: "hidden",
	},
	erick: {
		top: 286,
		left: 157,
		fontSize: 32,
		color: "#fff",
		position: "absolute"
	},
	iconButtonToggleable: {
		top: 24,
		left: 13,
		width: 48,
		height: 48,
		position: "absolute"
	},
	iconUserCircleIcon: {
		height: "14.91%",
		width: "32.32%",
		top: "10%",
		right: "33.84%",
		bottom: "69.95%",
		left: "33.84%",
		maxWidth: "100%",
		maxHeight: "100%",
		position: "absolute",
		overflow: "hidden",
		backgroundColor: "#F5F5F5",
		borderRadius: 10,
		alignItems: "center",
	},
	icon1: {
		marginTop: 20,
	},
	perfilInner: {
		top: 244,
		left: 435,
		backgroundColor: "#fff",
		height: 133,
		transform: [
			{
				rotate: "-128.2deg"
			}
		],
		width: 394,
		borderRadius: 20
	},
	rectangleView: {
		top: 275,
		left: 440,
		height: 133,
		transform: [
			{
				rotate: "-128.2deg"
			}
		],
		width: 394,
		borderRadius: 20,
		backgroundColor: "rgba(255, 255, 255, 0.81)"
	},
	rectangleView1: {
		top: -184,
		left: -390,
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
	perfilChild1: {
		top: 307,
		left: 451,
		backgroundColor: "rgba(245, 245, 245, 0.81)",
		height: 133,
		transform: [
			{
				rotate: "-128.2deg"
			}
		],
		width: 394,
		borderRadius: 20
	},
	perfilChild2: {
		left: -184,
		top: 409
	},
	perfilChild3: {
		top: -222,
		left: 43
	},
	perfilChild4: {
		left: 8,
		top: 409
	},
	perfilChild5: {
		top: 539,
		left: 7
	},
	designSemNome2: {
		top: 420
	},
	perfilChild6: {
		top: 1258,
		left: 3977,
		backgroundColor: "rgba(0, 194, 13, 0.65)",
		width: 777,
		height: 127,
		shadowOpacity: 1,
		elevation: 4,
		shadowRadius: 4,
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowColor: "rgba(0, 0, 0, 0.25)",
		borderRadius: 20,
		position: "absolute"
	},
	mduloConceitosIniciais: {
		fontSize: 16,
		color: "#0c63a2"
	},
	mduloConceitosIniciaisParent: {
		top: 434,
		width: 185,
		height: 60
	},
	saldo63: {
		top: 550
	},
	mduloInvestimentosParent: {
		top: 565,
		width: 186,
		height: 68
	},
	perfil: {
		backgroundColor: "#001e57",
		flex: 1,
		width: "100%",
		height: 852,
		overflow: "hidden"
	}
});

export default Perfil;
