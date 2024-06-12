import {ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {COLORS} from "@/constants/Colors";
import {trainingData} from "@/utils/mocks";
import CustomHeaderButton from "@/components/CustomHeaderButton";

export const TrainingPlan = () => {
	const training = trainingData;
	return (
	<ScrollView style={styles.container}>
		<View style={styles.backButton}>
			<CustomHeaderButton/>
		</View>
		<Text style={styles.title}> План тренировки</Text>
	<View style={styles.card}>
		<View style={styles.cardContainer}>
			<Text style={styles.cardTextTitle}>Отдых между подходами</Text>
			<Text style={styles.cardText}>{training.restBetweenExercises} секунд</Text>
		</View>
		<View style={styles.cardContainer}>
			<Text style={styles.cardTextTitle}>Доп. информация: </Text>
			{
				training.additionalMarks.map((mark, index) => (
					<Text
						key={index}
						style={styles.cardText}
					>
						{mark}
						{"\n"}
					</Text>
				))
			}

		</View>
	</View>
	<Text style={styles.cardHeader}>Упражнения {"\n"}</Text>
	{
		training.exercises.map((exercise, index) => (
			<View
				key={index}
				style={styles.card}
			>
				<Text style={styles.cardHeader}>{exercise.name}</Text>
				<View style={styles.cardSplitter}>
					<View style={styles.exerciseInfo}>
						<View style={styles.cardContainer}>
							<Text style={styles.cardTextTitle}>Сложность</Text>
							<Text style={styles.cardText}>{exercise.difficulty}</Text>
						</View>
						<View style={styles.cardContainer}>
							<Text style={styles.cardTextTitle}>Группа мышц</Text>
							<Text style={styles.cardText}>{exercise.muscle}</Text>
						</View>
						<View style={styles.cardContainer}>
							<Text style={styles.cardTextTitle}>Оборудование</Text>
							<Text style={styles.cardText}>{exercise.equipment}</Text>
						</View>
					</View>
					<View style={styles.exerciseInfoRight}>
						<View style={styles.cardContainer}>
							<Text style={styles.cardTextTitle}>Подходы</Text>
							<Text style={styles.cardText}>{exercise.sets}</Text>
						</View>
						<View style={styles.cardContainer}>
							<Text style={styles.cardTextTitle}>Повторения</Text>
							<Text style={styles.cardText}>{exercise.reps}</Text>
						</View>
						<View style={styles.cardContainer}>
							<Text style={styles.cardTextTitle}>Перерыв</Text>
							<Text style={styles.cardText}>{exercise.restBetweenSets} секунд</Text>
						</View>
					</View>
				</View>
			</View>
		))
}
	</ScrollView>)
}
	const styles = StyleSheet.create({
		backButton: {
			position: "absolute",
			top: 16
		},
		card: {
			backgroundColor: COLORS.WHITE,
			borderRadius: 8,
			marginBottom: 16,
			padding: 16,
		},
			cardContainer: {
			justifyContent: 'flex-start',
			padding: 8,
			width: "100%"
		},
			cardHeader: {
			fontSize: 12,
			fontWeight: 'bold',
		},
			cardSplitter: {
			flexDirection: "row",
		},
			cardText: {
			color: COLORS.BLACK,
			fontSize: 14,
		},
			cardTextTitle: {
			color: COLORS.LIGHT_GRAY,
			fontSize: 12,
			marginBottom: 4,
		},
			container: {
			backgroundColor: COLORS.CARD_BACKGROUND,
			flex: 1,
			overflow: "scroll",
			padding: 25
		},
			exerciseInfo: {
			flexDirection: "column",
		},
			exerciseInfoRight: {
			flexDirection: "column",
			marginLeft: "auto",
		},
			title: {
			alignSelf: "center",
			color: COLORS.DARK_GRAY,
			fontSize: 16,
			fontWeight: "bold",
			marginTop: 30,
			margin: 16,
		}
		});