import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS} from "@/constants/Colors";
import {coach, trainingMocks} from "@/utils/mocks";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {BaseScreenLayout} from "@/components/BaseScreenLayout";
import {NavigationProp, TRAINER_TABS} from "@/types/navigation";
import {useNavigation} from "@react-navigation/native";

export const HomeScreen: React.FC = () => {
	const user = coach;
	const navigation = useNavigation<NavigationProp>();
	const date = new Date();
	return (
		<BaseScreenLayout>

			<View style={styles.card}>
				<Text style={styles.header}>
					{date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
				</Text>
				<View style={styles.profileInfo}>
					<Image
						source={{uri: 'https://via.placeholder.com/150'}}
						style={styles.image}
					/>
					<View style={styles.nameContainer}>
						<Text style={styles.name}>{user.name}</Text>
						<View style={styles.badges}>
							<View style={styles.badge}>
								<Text style={styles.badge}>Мастер спорта</Text>
							</View>
						</View>
						<Text style={styles.phone}>{user.email}</Text>
					</View>
				</View>
				<View style={styles.textContainer}>
					<Text
						style={styles.cardHeader}
					>Тренировок на сегодня:</Text>
					<Text
						style={styles.text}
					>{trainingMocks.length}</Text>
				</View>
				<View style={styles.textContainer}>
					<Text
						style={styles.cardHeader}
					>Проведено тренировок:</Text>
					<Text
						style={styles.text}
					>{trainingMocks.filter((training)=> training.completed).length}</Text>
				</View>
			</View>
			<View style={styles.trainingContainer}>
				<Text style={styles.header}>Ближайшая тренировка</Text>
				<View style={styles.trainingInfo}>
					<View style={styles.timeContainer}>
						<View style={styles.timeBox}>
							<Text style={styles.timeText}>12:00</Text>
						</View>
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
							<Image source={{uri: 'https://via.placeholder.com/150'}} style={styles.trainerImage}/>
							<View>
								<Text style={styles.trainerLabel}>Клиент</Text>
								<Text style={styles.trainerName}>Клиентов Виктор Михайлович</Text>
							</View>
						</View>
						<View style={styles.trainingType}>
							<View style={styles.trainingIconText}>
								<Icon name={'dumbbell'} size={16} color={COLORS.DARK_GRAY}/>
								<Text style={styles.workoutType}>Бокс</Text>
							</View>
							<View style={styles.trainingIconText}>
								<Icon name={'map-marker'} size={16} color={COLORS.DARK_GRAY}/>
								<Text style={styles.location}>ул. Строителей 56</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
			<TouchableOpacity
				style={styles.aiButton}
				onPress={() => {
					navigation.navigate(TRAINER_TABS.TRAINING_LIST);
				}}
			>
				<Text style={styles.aiButtonText}>
					Все тренировки
				</Text>
			</TouchableOpacity>
		</BaseScreenLayout>
	);
}
const styles = StyleSheet.create({
	aiButton: {
		alignItems: 'center',
		backgroundColor: COLORS.PRIMARY_100,
		borderRadius: 8,
		display: 'flex',
		flexDirection: 'row',
		gap: 8,
		justifyContent: 'center',
		marginTop: 8,
		paddingVertical: 12,

		width: '100%',
	},
	aiButtonText: {
		color: COLORS.WHITE,
		fontSize: 16,
		fontWeight: 'bold',
	},
	badge: {
		backgroundColor: COLORS.LIGHT_GRAY,
		borderRadius: 8,
		color: COLORS.WHITE,
		marginRight: 4,
		padding: 2,

	},
	badges: {
		flexDirection: 'row',
		marginBottom: 8,

	},
	card: {
		alignItems: 'flex-start',
		backgroundColor: COLORS.WHITE,
		borderRadius: 8,
		flexDirection: "column",
		marginBottom: 16,
		padding: 16,
	},
	cardHeader: {
		fontSize: 12,
		fontWeight: 'bold',
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
		header: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 8,
	},
		image: {
		borderRadius: 50,
		height: 70,
		marginBottom: 8,
		width: 70,
	},
		location: {
			color: COLORS.GRAY,
			fontSize: 12,
		},
		name: {
		flexShrink: 1,
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 8,
	},
		nameContainer: {
		flexDirection: "column",
		flexShrink: 1,
		justifyContent: "center",
		marginLeft: 8

	},
		phone: {
		color: COLORS.LIGHT_GRAY,
		fontSize: 16,
	},
	profileInfo: {
		flexDirection: 'row',
		marginVertical: 8,
	},
		text: {
		color: COLORS.DARK_GRAY,
		fontSize: 16,
		fontWeight: 'bold',
	},
		textContainer: {
		alignItems: "center",
		flexDirection: "row",
		gap: 12,
		marginTop: 12,
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