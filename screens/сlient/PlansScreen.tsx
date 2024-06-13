import {StyleSheet, ScrollView, TouchableOpacity, Text} from "react-native";
import {COLORS} from "@/constants/Colors";
import React from "react";
import {TrainerCard} from "@/components/TrainerCard";
import {TrainingCard} from "@/components/TrainingCard";
import {NavigationProp, ROUTES} from "@/types/navigation";
import {useNavigation} from "@react-navigation/native";

export const PlansScreen = () => {
	const navigation = useNavigation<NavigationProp>();
	return (
		<ScrollView style={styles.container}>
			<TrainerCard/>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate(ROUTES.WORKOUT)}
			>
				<Text
					style={styles.buttonText}
				>Начать тренировку</Text>
			</TouchableOpacity>
			<TrainingCard
				time="09:00"
				date="Сегодня"
				duration="50 мин"
				trainerName="Николай Сергеевич В."
				trainerImage="https://via.placeholder.com/150"
				workoutType="Бокс"
				location="Зал боевых искусств"
			/>

		</ScrollView>
	)
}


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
	container: {
		backgroundColor: COLORS.CARD_BACKGROUND,
		flex: 1,
		overflow: "scroll",
		padding: 25,
	}
});