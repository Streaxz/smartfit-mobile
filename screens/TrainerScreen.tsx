import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {PhoneInput} from "@/components/PhoneInput";
export const TrainerScreen: React.FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Trainer Registration</Text>
			<PhoneInput />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
});
