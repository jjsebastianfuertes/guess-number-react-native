import React from "react";
import { View, StyleSheet, Button, Image} from "react-native";
import ButtonStyle from "../components/ButtonStyle";
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
			<PText>Numebr of rounds: {props.roundsNumber}</PText>
			<PText>Number was: {props.userNumber}</PText>
			<ButtonStyle>
				<Button title="New Game" onPress={props.onRestartgame}/>
			</ButtonStyle>
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
	}
})

export default GameOverScreen;