import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ButtonStyle from "../components/ButtonStyle";

const GameOverScreen = (props) => {
  return (
		<View style={styles.screen}>
			<Text>The Game is Over!</Text>
			<Text>Numebr of rounds: {props.roundsNumber}</Text>
			<Text>Number was: {props.userNumber}</Text>
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
	}
})

export default GameOverScreen;