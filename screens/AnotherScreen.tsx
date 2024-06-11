import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const AnotherScreen: React.FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Another screen</Text>
		</View>
	);
}

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
})