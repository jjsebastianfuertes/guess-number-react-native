import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

const Header = (props) => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    header: {
        height: 90,
        width: '100%',
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    }
});

export default Header;