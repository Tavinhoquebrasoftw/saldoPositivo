import { Audio } from 'expo-av';
import * as Animatable from 'react-native-animatable';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView, Text, Image, Modal, ImageBackground } from "react-native";
import DbT from '../../../../BackIn/InvestimentosB/DbT';
import { supabase } from "../../../lib/supabase";
import { router } from 'expo-router';
const BackgroundImage = require("../../../assets/background.png");

const AnliseDeMercadoTraderEm = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [nscore, setNscore] = useState(0);
	const [selectedOption, setSelectedOption] = useState<string | null>(null);
	const [desafioComplete, setDesafioComplete] = useState(false);
	const [showFeedback, setShowFeedback] = useState(false);
	const [feedbackMessage, setFeedbackMessage] = useState('');
	const [lives, setLives] = useState(3);
	const [animation, setAnimation] = useState<'bounce' | 'shake' | undefined>(undefined);
	const [modulos, setModulos] = useState(0);

	// const playSound = async (type: 'correct' | 'wrong') => {
	//     const soundFile = type === 'correct' 
	//         ? require('../assets/correct.mp3') 
	//         : require('../assets/wrong.mp3');

	//     const { sound } = await Audio.Sound.createAsync(soundFile);
	//     await sound.playAsync();
	// };
	const handleAnswer = () => {
		if (desafioComplete || lives === 0) return;

		if (DbT[currentQuestion].correctAnswer === selectedOption) {
			setScore(score + 1);
			// playSound('correct'); 
			setAnimation('bounce');
		} else {
			setFeedbackMessage(DbT[currentQuestion].feedback || 'Resposta incorreta.');
			setShowFeedback(true);
			setNscore(nscore + 1);
			setLives(lives - 1);
			// playSound('wrong'); 
			setAnimation('shake');
		}

		setTimeout(handleNextQuestion, 1000);
	};

	const handleNextQuestion = () => {
		if (currentQuestion < DbT.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
			setSelectedOption(null);
			setAnimation(undefined);
		} else {
			setDesafioComplete(true);
		}
	};
	const updateUserScore = async (newScore: number) => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data?.user) {
			console.error('Erro ao obter usuário:', error);
			return;
		}

		const userId = data.user.id;


		const { data: userData, error: fetchError } = await supabase
			.from('users')
			.select('score')
			.eq('id', userId)
			.single();

		if (fetchError) {
			console.error('Erro ao buscar pontuação:', fetchError);
			return;
		}

		const updatedScore = (userData?.score || 0) + newScore;


		const { error: updateError } = await supabase
			.from('users')
			.update({ score: updatedScore })
			.eq('id', userId);

		if (updateError) {
			console.error('Erro ao atualizar pontuação:', updateError);
		} else {
			console.log(`Pontuação incrementada! Novo total: ${updatedScore}`);
		}
	};


	const updateUserNScore = async (newScoren: number) => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data?.user) {
			console.error('Erro ao obter usuário:', error);
			return;
		}

		const userId = data.user.id;


		const { data: userData, error: fetchError } = await supabase
			.from('users')
			.select('nscore')
			.eq('id', userId)
			.single();

		if (fetchError) {
			console.error('Erro ao buscar pontuação:', fetchError);
			return;
		}

		const updatedScore = (userData?.nscore || 0) + newScoren;


		const { error: updateError } = await supabase
			.from('users')
			.update({ nscore: updatedScore })
			.eq('id', userId);

		if (updateError) {
			console.error('Erro ao atualizar pontuação:', updateError);
		} else {
			console.log(`Pontuação incrementada! Novo total: ${updatedScore}`);
		}
	};


	if (lives === 0) {
		return (
			<View style={styles.gameOverContainer}>
				<Text style={styles.gameOverText}>Você perdeu! Tente novamente mais tarde.</Text>
			</View>
		);
	}
	const handleFinishQuiz = async () => {
		await updateUserScore(score);
		await updateUserNScore(nscore);
		router.push('/(tabs)/TelaMenu');
		setModulos(modulos + 1);
	};

	if (desafioComplete) {
		handleFinishQuiz();

	}

	return (
		<ImageBackground source={BackgroundImage} style={styles.container}>

			<View style={styles.livesContainer}>
				{Array.from({ length: lives }).map((_, index) => (
					<Image key={index} source={require('../../../assets/Dollar.png')} style={styles.coinIcon} />
				))}
			</View>

			<Animatable.View animation={animation} duration={500} style={styles.card}>
				<Text style={styles.title}>Gerente do Banco</Text>
				<Text style={styles.question}>{DbT[currentQuestion].question}</Text>
				<ScrollView>
					{DbT[currentQuestion].options.map((option: string, index: number) => (
						<TouchableOpacity
							key={index}
							style={[styles.optionButton, selectedOption === option && styles.selectedOption]}
							onPress={() => setSelectedOption(option)}
							disabled={desafioComplete}
						>
							<Text style={styles.optionText}>{option}</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
				<TouchableOpacity
					style={[styles.answerButton, selectedOption === null && styles.disabledButton]}
					onPress={handleAnswer}
					disabled={!selectedOption || desafioComplete}
				>
					<Text style={styles.answerText}>Responder</Text>
				</TouchableOpacity>
				{/* <Text style={styles.score}>Pontuação: {score}</Text> */}
				{desafioComplete && <Text style={styles.completedText}>Desafio concluído!</Text>}
			</Animatable.View>


			<Modal visible={showFeedback} transparent animationType="slide">
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						<Text>{feedbackMessage}</Text>
						<TouchableOpacity onPress={() => setShowFeedback(false)}>
							<Text>Fechar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	livesContainer: {
		flexDirection: "row",
		position: "absolute",
		top: 20,
		left: 20,
		backgroundColor: "#0f466c",
		borderRadius: 15,
	},
	coinIcon: {
		width: 30,
		height: 30,
		marginRight: 5,
	},
	gameOverContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	gameOverText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "red",
	},
	card: {
		backgroundColor: "rgba(0, 41, 77, 0.9)",
		padding: 20,
		borderRadius: 10,
		alignItems: "center",
		width: "90%",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
		marginBottom: 10,
	},
	question: {
		fontSize: 14,
		color: "white",
		textAlign: "center",
		marginBottom: 20,
	},
	optionButton: {
		backgroundColor: "white",
		padding: 10,
		borderRadius: 5,
		marginVertical: 5,
		alignItems: "center",
	},
	selectedOption: {
		backgroundColor: "#3498db",
	},
	optionText: {
		fontSize: 14,
		color: "black",
	},
	answerButton: {
		backgroundColor: "#3498db",
		padding: 10,
		borderRadius: 5,
		marginTop: 10,
		alignItems: "center",
	},
	disabledButton: {
		opacity: 0.5,
	},
	answerText: {
		color: "white",
		fontWeight: "bold",
	},
	score: {
		marginTop: 10,
		color: "white",
		fontSize: 14,
	},
	completedText: {
		marginTop: 10,
		color: "#27ae60",
		fontWeight: "bold",
	},
	modalContainer: {
		flex: 1,
		height:"50%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContent: {
		backgroundColor: "white",
		borderColor:"#00C20D",
		padding: 20,
		borderRadius: 10,
		alignItems: "center",
	},
});

export default AnliseDeMercadoTraderEm;
