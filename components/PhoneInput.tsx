import React, { useState } from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';
import {Colors} from "@/constants/Colors";
import {USER_TYPE} from "@/types/user";
import {useDispatch} from "react-redux";
import {login} from "@/features/auth/authStore";
import {useNavigation} from "@react-navigation/native";
import {RegistrationScreenNavigationProp, ROUTES} from "@/types/navigation";

interface PhoneInputProps {
	role: USER_TYPE;
}
export const PhoneInput: React.FC<PhoneInputProps> = ({role}) => {
	const [phoneNumber, setPhoneNumber] = useState<string>('');
	const dispatch = useDispatch();

	const navigation = useNavigation<RegistrationScreenNavigationProp>();

	const handleLogin = () => {
		dispatch(login({ role }));
		navigation.navigate(ROUTES.MAIN);
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
			<Button title="Register" onPress={handleLogin} color="#f194ff" />
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
