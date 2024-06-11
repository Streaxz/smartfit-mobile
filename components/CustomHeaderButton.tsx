import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {BACK_BUTTON_BACKGROUND, WHITE} from "@/constants/Colors";

const CustomHeaderButton: React.FC = () => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
			<Text style={styles.text}>Back</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: BACK_BUTTON_BACKGROUND, // Customize your button style here
		borderRadius: 5,
		padding: 10,

	},
	text: {
		color: WHITE,
		fontWeight: 'bold',
	},
});

export default CustomHeaderButton;
