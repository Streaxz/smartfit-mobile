import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RegistrationScreenNavigationProp, ROUTES} from '@/types/navigation';
import {BLACK, CLIENT_BUTTON_COLOR, TRAINER_BUTTON_COLOR, WHITE} from "@/constants/Colors";

export const RegistrationScreen: React.FC = () => {
	const navigation = useNavigation<RegistrationScreenNavigationProp>();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Registration Screen</Text>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[styles.button, styles.trainerButton]}
					onPress={() => navigation.navigate(ROUTES.TRAINER_AUTH)}
				>
					<Text style={styles.buttonText}>я тренер</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, styles.clientButton]}
					onPress={() => navigation.navigate(ROUTES.CLIENT_AUTH)}
				>
					<Text style={styles.buttonText}>я клиент</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.skipButton}
					onPress={() => navigation.reset({
						index: 0,
						routes: [{ name: ROUTES.MAIN}],
					})}
				>
					<Text style={styles.skipButtonText}>Пропустить</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		borderRadius: 10,
		marginVertical: 10,
		paddingVertical: 15,
	},
	buttonContainer: {
		justifyContent: 'space-between',
		width: '80%',
	},
	buttonText: {
		color: WHITE,
		fontSize: 16,
		fontWeight: 'bold',
	},
	clientButton: {
		backgroundColor: CLIENT_BUTTON_COLOR,
	},
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	skipButton: {
		alignItems: 'center',
		marginTop: 20,
		paddingHorizontal: 30,
		paddingVertical: 15,
	},
	skipButtonText: {
		color: BLACK,
		fontSize: 16,
		fontWeight: 'bold',
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
	trainerButton: {
		backgroundColor: TRAINER_BUTTON_COLOR, // Pink background for trainer button
	},
});
