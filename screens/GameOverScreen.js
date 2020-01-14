import React from "react";
import { View, StyleSheet, Text, Button, Image} from "react-native";
import MainButton from "../components/buttons/MainButton";
import PText from '../components/text/PText';
import H1Text from "../components/text/H1Text";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
		<View style={styles.screen}>
			<H1Text>The Game is Over!</H1Text>
			<View style={styles.imageContainer}>
				<Image 
					source={require('../assets/images/success.png')} 
					style={styles.image}
					resizeMode="cover"
				/>
			</View>
			<View style={styles.resultTextContainer}>
				<PText style={styles.resultText}>
					Your phone needed 
					<PText style={styles.highlight}> {props.roundsNumber} </PText>
					rounds. To guess the number
					<PText style={styles.highlight}> {props.userNumber}.</PText>
				</PText>
			</View>
			<MainButton onPress={props.onRestartgame}>
				New Game
			</MainButton>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 10,
		borderColor: Colors.primary,
		overflow: 'hidden',
		marginVertical: 20
	},
	image: {
		width: '100%',
		height: '100%',
	},
	resultTextContainer: {
		width: '80%',
		marginVertical: 15
	},
	resultText: {
		textAlign: "center",
		fontSize: 20
	},
	highlight: {
		color: Colors.primary,
		fontFamily: 'open-sans-bold'
	}
})

export default GameOverScreen;