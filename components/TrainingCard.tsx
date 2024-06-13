import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@/constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {trainingData} from "@/utils/mocks";
import {useNavigation} from "@react-navigation/native";
import {NavigationProp, ROUTES} from "@/types/navigation";

interface TrainingCardProps {
	time: string;
	date: string;
	duration: string;
	trainerName: string;
	trainerImage: string;
	workoutType: string;
	location: string;
}

export const TrainingCard = ({
	time,
	date,
	trainerName,
	trainerImage,
	workoutType,
	location,
}: TrainingCardProps) => {
	const navigation = useNavigation<NavigationProp>();
	return (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate(ROUTES.PLAN);
			}}
		>
		<View style={styles.card}>
			<Text style={styles.header}>Ближайшая тренировка</Text>
			<View style={styles.trainingContainer}>
				<View style={styles.trainingInfo}>
					<View style={styles.timeContainer}>
						<View style={styles.timeBox}>
							<Text style={styles.timeText}>{time}</Text>
						</View>
						<Text style={styles.dateText}>{date}</Text>
					</View>
					<View style={styles.clockBox}>
						<Icon
							name="clock-outline"
							size={19}
							color={COLORS.WHITE}
						></Icon>
						<Text style={styles.timeText}>50 мин</Text>
					</View>
				</View>
				<View>
					<View style={styles.trainerInfo}>
						<View style={styles.trainerContainer}>
							<Image source={{uri: trainerImage}} style={styles.trainerImage}/>
							<View>
								<Text style={styles.trainerLabel}>Тренер</Text>
								<Text style={styles.trainerName}>{trainerName}</Text>
							</View>
						</View>
						<View style={styles.trainingType}>
							<View style={styles.trainingIconText}>
								<Icon name={'dumbbell'} size={16} color={COLORS.DARK_GRAY}/>
								<Text style={styles.workoutType}>{workoutType}</Text>
							</View>
							<View style={styles.trainingIconText}>
								<Icon name={'map-marker'} size={16} color={COLORS.DARK_GRAY}/>
								<Text style={styles.location}>{location}</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
			<Text style={styles.planHeader}>План тренировки</Text>
			<View style={styles.workoutPlan}>
				{trainingData.exercises.map((exercise, index) => (
					<View key={index} style={styles.exercise}>
						<View style={styles.exerciseNameContainer}>
						<Text style={styles.exerciseName}>{exercise.name}</Text>
						</View>
						<View style={styles.exerciseDetailsContainer}>
						<Text style={styles.exerciseDetails}>
							{exercise.sets} подходов, {exercise.reps} повторений
						</Text>
						</View>
					</View>
				))}
			</View>
		</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: COLORS.WHITE,
		borderRadius: 8,
		marginBottom: 16,
		padding: 16,
	},
	clockBox: {
		alignItems: 'center',
		backgroundColor: COLORS.DARK_GRAY,
		borderRadius: 4,
		flexDirection: 'row',
		gap: 4,
		justifyContent: 'space-between',
		padding: 6,
	},
	dateText: {
		color: COLORS.DARK_GRAY,
		fontSize: 14,
	},
	exercise: {
		flexDirection: 'row',
		flexShrink: 1,
		justifyContent: 'space-between',
		marginBottom: 4,
	},
	exerciseDetails: {
		color: COLORS.GRAY,
		flexShrink: 1,
		fontSize: 14,
	},
	exerciseDetailsContainer: {
		flexShrink: 1,
		justifyContent: 'flex-start',
	},
	exerciseName: {
		color: COLORS.BLACK,
		flexShrink: 1,
		fontSize: 14,
	},
	exerciseNameContainer: {
		flexShrink: 1,
		justifyContent: 'flex-start',
	},
	header: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 8,
	},
	location: {
		color: COLORS.GRAY,
		fontSize: 12,
	},
	planHeader: {
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 8,
	},
	timeBox: {
		alignItems: 'center',
		backgroundColor: COLORS.DARK_ORANGE,
		borderRadius: 4,
		marginRight: 4,
		padding: 6,
	},
	timeContainer: {
		alignItems: 'center',
		flexDirection: "row",
		justifyContent: 'flex-start',
	},
	timeText: {
		color: COLORS.WHITE,
		fontSize: 16,
		fontWeight: 'bold',
	},
	trainerContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		gap: 8,
		justifyContent: 'flex-start',
		marginBottom: 12,
	},
	trainerImage: {
		borderRadius: 100,
		height: 40,
		marginRight: 4,
		width: 40,
	},
	trainerInfo: {
		flexDirection: 'column',
		justifyContent: "flex-start",
		marginLeft: 10,
	},
	trainerLabel: {
		color: COLORS.GRAY,
		fontSize: 12,
		fontWeight: "bold",
	},
	trainerName: {
		fontSize: 14,
	},
	trainingContainer: {
		backgroundColor: COLORS.CARD_BACKGROUND,
		borderRadius: 6,
		marginBottom: 6,
		padding: 8,
	},
	trainingIconText: {
		alignItems: 'center',
		flexDirection: 'row',
		gap: 8,
		justifyContent: 'flex-start',
	},
	trainingInfo: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 16,
	},
	trainingType: {
		gap: 8,
		marginLeft: 28,
	},
	workoutPlan: {
		paddingLeft: 8,
	},
	workoutType: {
		color: COLORS.GRAY,
		fontSize: 14,
		fontWeight: "bold",
	}
});
