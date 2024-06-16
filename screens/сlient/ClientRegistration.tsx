import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {PhoneInput} from "@/components/PhoneInput";
import {USER_TYPE} from "@/types/user";
export const ClientRegistration: React.FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Вход</Text>
			<PhoneInput
				role={USER_TYPE.CLIENT}
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
