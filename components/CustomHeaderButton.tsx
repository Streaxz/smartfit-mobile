import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {COLORS} from "@/constants/Colors";
const CustomHeaderButton: React.FC = () => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
			<Text style={styles.text}>Назад</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: COLORS.ORANGE, // Customize your button style here
		borderRadius: 5,
		marginTop: 7,
		padding: 10,


	},
	text: {
		color: COLORS.WHITE,
		fontWeight: 'bold',
	},
});

export default CustomHeaderButton;
