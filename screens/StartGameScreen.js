import React, {useState} from 'react';
import {
				View, 
        StyleSheet, 
        Text, 
        Button, 
				TouchableWithoutFeedback,
				Keyboard,
				Alert
			} from 'react-native';
import Card from '../components/Card';
import ButtonStyle from '../components/buttons/MainButton';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/buttons/MainButton';

const StartGameScreen = props =>{
    
		const [enteredValue, setEnteredValue] = useState("");
		const [confirmed, setConfirmed] = useState(false);
		const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
		};
		
		const resetInputHandler = () => {
			setEnteredValue('');
			setConfirmed(false);
		}

		const confirmInputHandler = () => {
			const chosenNumber = parseInt(enteredValue);
			if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
				Alert.alert(
										'Invalid number', 
										'Number has to be a number between 1 and 99', 
										[
											{
												text:' Okay', 
												style: 'destructive',
												onPress: resetInputHandler
											}
										]
				);
				return;
			}
			setConfirmed(true);
			setSelectedNumber(parseInt(enteredValue));
			setEnteredValue('');
			Keyboard.dismiss();
		}

		let confirmedOutput;

		if (confirmed) {
			confirmedOutput = 
				<Card style={styles.summaryContainer}>
					<Text>You selected:</Text>
					<NumberContainer>
						{selectedNumber}
					</NumberContainer>
					<MainButton style={styles.startButton} onPress={() => props.onStartGame(selectedNumber)}>
						START GAME
          </MainButton>
				</Card>
		} 

    return (
				<TouchableWithoutFeedback onPress={()=>{
					Keyboard.dismiss();
				}}>
					<View style={styles.screen}>
							<Text style={styles.title}>Start a New Game</Text>
							<Card style={styles.inputContainer}>
									<Text style={styles.text}>Select a Number</Text>
									<Input style={styles.input} 
											blurOnSubmit 
											autoCapitalize="none" 
											autoCorrect={false} 
											keyboardType="number-pad"
											maxLength={2}
											onChangeText={numberInputHandler}
											value={enteredValue}
									/>
									<View style={styles.buttonContainer}>
										<MainButton style={styles.reset} onPress={resetInputHandler}>
											RESET
										</MainButton>
										<MainButton style={styles.confirm} onPress={confirmInputHandler}>
											CONFIRM
										</MainButton>
									</View>
							</Card>
							{confirmedOutput}
					</View>
				</TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 20,
				marginVertical: 10,
				fontFamily: 'open-sans-bold',
		},
		text: {
			fontFamily: 'open-sans'
		},
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
		},
		startButton: {
			backgroundColor: Colors.primary,
		},
    confirm: {
        backgroundColor: Colors.primary,
    },
    reset: {
        backgroundColor: Colors.accent,
    },
    input: {
        width: 50,
        textAlign: 'center'
		},
		summaryContainer: {
			marginTop: 20,
			alignItems: 'center'
		}
});

export default StartGameScreen;