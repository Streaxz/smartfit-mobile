import {StyleSheet, ScrollView} from "react-native";
import {COLORS} from "@/constants/Colors";
import React from "react";
import {TrainerCard} from "@/components/TrainerCard";
import {TrainingCard} from "@/components/TrainingCard";

export const PlansScreen = () => {
	return (
		<ScrollView style={styles.container}>
			<TrainerCard/>
			<TrainingCard
				time="09:00"
				date="Сегодня"
				duration="50 мин"
				trainerName="Николай Сергеевич В."
				trainerImage="https://via.placeholder.com/150"
				workoutType="Бокс"
				location="Зал боевых искусств"
				workoutPlan={[
					{name: 'Приседания', sets: 6, reps: 15},
					{name: 'Отжимания', sets: 3, reps: 12},
					{name: 'Планка', sets: 3, reps: 1},
				]}
			/>
		</ScrollView>
	)
}


const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.CARD_BACKGROUND,
		flex: 1,
		overflow: "scroll",
		padding: 25,
	},
});