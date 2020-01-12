import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    //random number between min and mx number operation
    const rndNum = Math.floor(Math.random() * (max-min)) + min;
    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};
const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    );

    return (
        <View style={styles.screen}>
            <Text>Opponent's guess</Text>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button titte="LOWER" onPress={()=>{}}/>
                <Button titte="GREATER" onPress={()=>{}}/>
            </Card>
        </View>
    )
};

const style = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop:  20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;