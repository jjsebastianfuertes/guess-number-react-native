import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/colors";

const ButtonStyle = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style }}>
				<Text style={styles.buttonText}>{props.children}</Text>
			</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 16,
    color: "white",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: Colors.primary
	},
	buttonText: {
		color: 'white',
		fontFamily: 'open-sans',
		fontSize: 18
	}
});

export default ButtonStyle;
