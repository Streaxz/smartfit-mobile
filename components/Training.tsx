import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {COLORS} from "@/constants/Colors";
import React from "react";
import {ITraining} from "@/types/trainings";
import {NavigationProp, TRAINER_TABS} from "@/types/navigation";
import {useNavigation} from "@react-navigation/native";


export interface TrainingProps {
	training: ITraining;
}
export const Training = ({training}: TrainingProps) => {
	const navigation = useNavigation<NavigationProp>();
	return (
		<TouchableOpacity
			onPress={() => {navigation.navigate(TRAINER_TABS.WORKOUT)}}
			key={training.id}
			style={styles.trainingContainer}>
			{!training.completed &&
          <View style={styles.trainingInfo}>

              <View style={styles.timeContainer}>
                  <View style={styles.timeBox}>
                      <Text style={styles.timeText}>{training.startTime}</Text>
                  </View>
              </View>
              <View style={styles.clockBox}>
                  <Icon
                      name="clock-outline"
                      size={19}
                      color={COLORS.WHITE}
                  ></Icon>
                  <Text style={styles.timeText}>{training.duration} мин</Text>
              </View>
          </View>
			}
			<View>
				<View style={styles.trainerInfo}>
					<View style={styles.trainerContainer}>
						<Image source={{uri: 'https://via.placeholder.com/150'}} style={styles.trainerImage}/>
						<View>
							<Text style={styles.trainerLabel}>Клиент</Text>
							<Text style={styles.trainerName}>{training.client.name}</Text>
						</View>
					</View>
					<View style={styles.trainingType}>
						<View style={styles.trainingIconText}>
							<Icon name={'dumbbell'} size={16} color={COLORS.DARK_GRAY}/>
							<Text style={styles.workoutType}>{training.type}</Text>
						</View>
						<View style={styles.trainingIconText}>
							<Icon name={'map-marker'} size={16} color={COLORS.DARK_GRAY}/>
							<Text style={styles.location}>{training.location}</Text>
						</View>
					</View>
				</View>
			</View>
			{
				training.completed &&
          <View style={styles.completed}>
              <Text style={styles.completedText}>Тренировка завершена</Text>
          </View>
			}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	clockBox: {
		alignItems: 'center',
		backgroundColor: COLORS.DARK_GRAY,
		borderRadius: 4,
		flexDirection: 'row',
		gap: 4,
		justifyContent: 'space-between',
		padding: 6,
	},
	completed: {
		margin: 8,
	},
	completedText: {
		color: COLORS.DARK_ORANGE,
		fontSize: 14,
		fontWeight: "bold",
	},
	location: {
		color: COLORS.GRAY,
		fontSize: 12,
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
		paddingBottom: 16,
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
		backgroundColor: COLORS.WHITE,
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
	workoutType: {
		color: COLORS.GRAY,
		fontSize: 14,
		fontWeight: "bold",
	}
});