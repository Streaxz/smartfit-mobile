import React, {useRef, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {COLORS} from "@/constants/Colors";
import CustomHeaderButton from "@/components/CustomHeaderButton";
import {trainingData} from "@/utils/mocks";
import {Exercise} from "@/types/trainings";
import {CircularProgress} from "@/components/CircullarProgress";

export const Workout = () => {
	const training = trainingData;
	const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState(0);
	const [currentExercise, setCurrentExercise] = useState<Exercise>(training.exercises[currentWorkoutIndex]);
	const [inProgress, setInProgress] = useState<boolean>(false);
	const [currentSet, setCurrentSet] = useState(0);
	// State and refs to manage time and stopwatch status
	const [time, setTime] = useState(0);
	const [, setRunning] = useState(false);
	const [isRest, setIsRest] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout>();
	const startTimeRef = useRef(0);
	const timeOut = isRest ? currentExercise.restBetweenSets : 180;
	const progress = 100 - (time / timeOut) * 100 > 0 ? 100 - (time / timeOut) * 100 : 0;
	let adjustedTime = timeOut - time;
	if (adjustedTime < 0) {
		adjustedTime = 0;
	}

	const timeString = `${Math.floor(adjustedTime / 60)}:${adjustedTime % 60 < 10 ? `0${adjustedTime % 60}` : adjustedTime % 60}`;

	// Function to start the stopwatch
	const startStopwatch = () => {
		startTimeRef.current = Date.now() - time * 1000;
		intervalRef.current = setInterval(() => {
			setTime(Math.floor((Date.now() -
				startTimeRef.current) / 1000));
		}, 1000);
		setRunning(true);
	};
	// Function to pause the stopwatch
	// const pauseStopwatch = () => {
	// 	clearInterval(intervalRef.current);
	// 	setRunning(false);
	// };
	// Function to reset the stopwatch
	const resetStopwatch = () => {
		clearInterval(intervalRef.current);
		setTime(0);
		setRunning(false);
	};

	// Function to resume the stopwatch
	// const resumeStopwatch = () => {
	// 	startTimeRef.current = Date.now() - time * 1000;
	// 	intervalRef.current = setInterval(() => {
	// 		setTime(Math.floor(
	// 			(Date.now() - startTimeRef.current) / 1000));
	// 	}, 1000);
	// 	setRunning(true);
	// };

	const handleStartWorkout = () => {
		setInProgress(true);
		startStopwatch();
	}

	const handleNextWorkout = () => {
		if (currentWorkoutIndex < training.exercises.length - 1) {

			if (currentSet < currentExercise.sets - 1) {
				setCurrentSet(currentSet + 1);
				setTime(0);
				setIsRest(false);
				startTimeRef.current = Date.now();
				clearInterval(intervalRef.current);
				intervalRef.current = setInterval(() => {
					setTime(Math.floor((Date.now() -
						startTimeRef.current) / 1000));
				}, 1000);
			} else {
			setCurrentWorkoutIndex(currentWorkoutIndex + 1);
			setCurrentExercise(training.exercises[currentWorkoutIndex + 1]);
			setTime(0);
			setIsRest(false);
			setCurrentSet(0);
			startTimeRef.current = Date.now();
			clearInterval(intervalRef.current);
			intervalRef.current = setInterval(() => {
				setTime(Math.floor((Date.now() -
					startTimeRef.current) / 1000));
			}, 1000);
			}
		} else {
			alert('No more workouts!');
		}
	};
	const handlePauseWorkout = () => {
		setTime(0);
		startTimeRef.current = Date.now();
		clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			setTime(Math.floor((Date.now() -
				startTimeRef.current) / 1000));
			setIsRest(true);
		});
	};

	const handleEndWorkout = () => {
		setInProgress(false);
		setIsRest(false);
		setCurrentWorkoutIndex(0);
		setCurrentExercise(training.exercises[0]);
		resetStopwatch();
	};
	return (
		<View style={styles.container}>
			<View style={styles.backButton}>
				<CustomHeaderButton/>
			</View>
			<Text style={styles.title}> Тренировка</Text>
			<View style={styles.card}>
				<Text style={styles.cardTitle}>{currentWorkoutIndex + 1} упражнение - {currentExercise.name}</Text>
				<View
					style={styles.card}
				>
					<Text style={styles.cardHeader}>{currentExercise.name}</Text>
					<View style={styles.cardSplitter}>
						<View style={styles.exerciseInfo}>
							<View style={styles.cardContainer}>
								<Text style={styles.cardTextTitle}>Сложность</Text>
								<Text style={styles.cardText}>{currentExercise.difficulty}</Text>
							</View>
							<View style={styles.cardContainer}>
								<Text style={styles.cardTextTitle}>Группа мышц</Text>
								<Text style={styles.cardText}>{currentExercise.muscle}</Text>
							</View>
							<View style={styles.cardContainer}>
								<Text style={styles.cardTextTitle}>Оборудование</Text>
								<Text style={styles.cardText}>{currentExercise.equipment}</Text>
							</View>
						</View>
						<View style={styles.exerciseInfoRight}>
							<View style={styles.cardContainer}>
								<Text style={styles.cardTextTitle}>Подходы</Text>
								<Text style={styles.cardText}>{currentExercise.sets}</Text>
							</View>
							<View style={styles.cardContainer}>
								<Text style={styles.cardTextTitle}>Повторения</Text>
								<Text style={styles.cardText}>{currentExercise.reps}</Text>
							</View>
							<View style={styles.cardContainer}>
								<Text style={styles.cardTextTitle}>Перерыв</Text>
								<Text style={styles.cardText}>{currentExercise.restBetweenSets} секунд</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.card}>
				<Text style={styles.cardTitle}>Таймер</Text>
				<View
					style={styles.progressContainer}
				>
					<Text
						style={styles.cardHeader}
					>{`Подход ${currentSet + 1}/${currentExercise.sets}`} </Text>
					<CircularProgress size={80} strokeWidth={6} progress={progress} progressText={timeString}/>
					<Text
						style={styles.cardHeader}
					> {isRest ? '\nОтдых' : '\nТренировка'}</Text>
				</View>
			</View>
				<View style={styles.card}>
					{inProgress ? (
						<View style={styles.buttonContainer}>
							{currentWorkoutIndex === training.exercises.length - 1 ? (
								<TouchableOpacity
									style={styles.button}
									onPress={handleEndWorkout}
								>
									<Text style={styles.buttonText}>Закончить</Text>
								</TouchableOpacity>
							) : (
								<>
									{!isRest ? (
										<TouchableOpacity
											style={styles.button}
											onPress={handlePauseWorkout}
										>
											<Text style={styles.buttonText}>Перерыв</Text>
										</TouchableOpacity>
									) : (
										<TouchableOpacity
											style={styles.button}
											onPress={handleNextWorkout}
										>
											<Text style={styles.buttonText}>Продолжить</Text>
										</TouchableOpacity>
									)}
									<TouchableOpacity
										style={styles.buttonGray}
										onPress={handleEndWorkout}
									>
										<Text style={styles.buttonGrayText}>Закончить</Text>
									</TouchableOpacity>
								</>
							)}
						</View>
					) : (
						<TouchableOpacity
							style={styles.button}
							onPress={handleStartWorkout}
						>
							<Text style={styles.buttonText}>Начать тренировку</Text>
						</TouchableOpacity>
					)}
				</View>

		</View>
	)
}

const styles = StyleSheet.create({
	backButton: {
		left: 26,
		position: "absolute",
		top: 20,
	},
	button: {
		backgroundColor: COLORS.DARK_ORANGE,
		borderRadius: 5,
		marginBottom: 7,
		padding: 10,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	buttonGray: {
		backgroundColor: COLORS.DARK_WHITE,
		borderRadius: 5,
		marginBottom: 7,
		padding: 10,
	},
	buttonGrayText: {
		color: COLORS.LIGHT_GRAY,
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonText: {
		color: COLORS.WHITE,
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
	card: {
		backgroundColor: COLORS.WHITE,
		borderRadius: 8,
		marginBottom: 8,
		padding: 16,
		paddingBottom: 8,
	},
	cardContainer: {
		justifyContent: 'flex-start',
		padding: 8,
		width: "100%"
	},
	cardHeader: {
		fontSize: 12,
		fontWeight: 'bold',
		marginBottom: 10,
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
	cardTitle: {
		alignSelf: "center",
		color: COLORS.DARK_GRAY,
		fontSize: 16,
		fontWeight: "bold",
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
	progressContainer: {
		alignItems: "center",
		margin: 16,
	},
	title: {
		alignSelf: "center",
		color: COLORS.DARK_GRAY,
		fontSize: 16,
		fontWeight: "bold",
		marginTop: 10,
		margin: 16,
	},
});