import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PhoneInput} from "@/components/PhoneInput";
import {USER_TYPE} from "@/types/user";

export const TrainerScreen: React.FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Trainer Registration</Text>
			<PhoneInput
				role={USER_TYPE.TRAINER}
			/>
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
