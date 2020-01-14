import React from 'react';
import {Text, StyleSheet} from 'react-native';

const PText = (props) => <Text style={{...styles.text, ...props.style}}>{props.children}</Text>

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans',
        fontSize: 18
    }
});

export default PText;