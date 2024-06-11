import React, { useState } from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';
import {Colors} from "@/constants/Colors";

export const PhoneInput: React.FC = () => {
	const [phoneNumber, setPhoneNumber] = useState<string>('');

	const handleRegister = () => {
		alert(`Phone Number: ${phoneNumber}`);
	};

	return (
		<>
			<TextInput
				style={styles.input}
				placeholder="Enter your phone number"
				keyboardType="phone-pad"
				value={phoneNumber}
				onChangeText={setPhoneNumber}
			/>
			<Button title="Register" onPress={handleRegister} color="#f194ff" />
		</>
	);
};

const styles = StyleSheet.create({
	input: {
		borderColor: Colors.light.background,
		borderRadius: 5,
		borderWidth: 1,
		marginBottom: 20,
		padding: 10,
		width: '80%',
	},
});
