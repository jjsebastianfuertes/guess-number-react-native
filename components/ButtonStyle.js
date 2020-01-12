import React from 'react'
import {View, StyleSheet, Button} from 'react-native';

const ButtonStyle = (props) => {
    return  (
        <View style={{...styles.button, ...props.style}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    button:{
        fontSize: 16,
        color: 'white',
        width:  '50%',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    }
});

export default ButtonStyle;