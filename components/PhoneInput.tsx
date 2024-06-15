import React, {useState} from 'react';
import {Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {COLORS, Colors} from "@/constants/Colors";
import {USER_TYPE} from "@/types/user";
import {useDispatch} from "react-redux";
import {login} from "@/features/auth/authStore";
import {useNavigation} from "@react-navigation/native";
import {NavigationProp, ROUTES} from "@/types/navigation";
import {user} from "@/utils/mocks";

interface PhoneInputProps {
	role: USER_TYPE;
}
export const PhoneInput: React.FC<PhoneInputProps> = ({role}) => {
	const [phoneNumber, setPhoneNumber] = useState<string>('');
	const dispatch = useDispatch();

	const navigation = useNavigation<NavigationProp>();

	const handleLogin = () => {
		dispatch(login({ role, user }));
		navigation.reset({
			index: 0,
			routes: [role === USER_TYPE.TRAINER
				? {name: ROUTES.CLIENT_NAV, params: {screen: ROUTES.MAIN}}
				: {name: ROUTES.CLIENT_NAV, params: {screen: ROUTES.MAIN}}],
		});
	};

	return (
		<>
			<TextInput
				style={styles.input}
				placeholder="Введите свой номер"
				keyboardType="phone-pad"
				value={phoneNumber}
				onChangeText={setPhoneNumber}
			/>
			<TouchableOpacity
				style={styles.button}
				onPress={handleLogin} >
				<Text style={styles.buttonText}>Войти</Text>
			</TouchableOpacity>
		</>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: COLORS.DARK_ORANGE,
		borderRadius: 5,
		marginBottom: 7,
		padding: 10,
	},
	buttonText: {
		color: COLORS.WHITE,
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
	input: {
		borderColor: Colors.light.background,
		borderRadius: 5,
		borderWidth: 1,
		marginBottom: 20,
		padding: 10,
		width: '80%',
	},
});
