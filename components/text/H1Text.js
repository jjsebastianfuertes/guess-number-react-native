import React from 'react';
import {Text, StyleSheet} from 'react-native';

const H1Text = (props) => <Text style={{...styles.text, ...props.style}}>{props.children}</Text>

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 20
    }
});

export default H1Text;