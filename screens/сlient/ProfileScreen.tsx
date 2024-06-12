import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {selectUser, selectUserRole} from "@/features/auth/authSelectors";
import {useSelector} from "react-redux";
import {COLORS} from "@/constants/Colors";
import {USER_TYPE} from "@/types/user";
import {LevelBlock} from "@/components/LevelBlock";
import {Achievements} from "@/components/Achievements";


export interface Achievement {
	image: string;
	label: string;
}

// Example achievements data
export const achievements: Achievement[] = [
	{ image: 'https://via.placeholder.com/150', label: 'Ученик недели' },
	{ image: 'https://via.placeholder.com/150', label: 'Новая Привычка' },
	{ image: 'https://via.placeholder.com/150', label: 'Первая тренировка' },
];

export const ProfileScreen: React.FC = () => {
	const user = useSelector(selectUser)!;
	const role = useSelector(selectUserRole)!;

	// Calculate progress percentage for the circular progress bar
	const progress = (90 / 100) * 100;
	return (
		<ScrollView style={styles.container}>
			<View style={styles.profile}>
				{/*<Text style={styles.cardHeader}> Вы </Text>*/}
					<Image
						source={{uri: 'https://via.placeholder.com/150'}}
						style={styles.profileImage}
					/>
					<View style={styles.nameContainer}>
						<Text style={styles.name}>{user.name}</Text>
					</View>
				<View style={styles.badges}>
					<View style={styles.badge}>
						<Text style={styles.badge}>2 уровень</Text>
					</View>
				</View>
				<View style={styles.cardContainer}>
					<Text style={styles.cardTextTitle}>Email</Text>
					<Text style={styles.cardText}>{user.email}</Text>
				</View>
				<View style={styles.cardContainer}>
					<Text style={styles.cardTextTitle}>Дата рождения</Text>
					<Text style={styles.cardText}>null</Text>
				</View>
				<View style={styles.cardContainer}>
					<Text style={styles.cardTextTitle}>Пол</Text>
					<Text style={styles.cardText}>null</Text>
				</View>
			</View>
			<View style={styles.card}>
				<LevelBlock level={2} points={230} pointsToNextLevel={1000} progress={progress} />

			</View>

			{role === USER_TYPE.CLIENT && user.mainCouch &&
			<View style={styles.card}>
				<Text style={styles.cardHeader}> Тренер </Text>
				<View style={styles.profileInfo}>
					<Image
						source={{uri: 'https://via.placeholder.com/150'}}
						style={styles.image}
					/>
					<View style={styles.nameContainer}>
						<Text style={styles.name}>{user.mainCouch.name}</Text>
						<View style={styles.badges}>
							{/*<View style={styles.badge}>*/}
							{/*	/!*<Text style={styles.badge}>2 уровень</Text>*!/*/}
							{/*</View>*/}
						</View>
						<Text style={styles.phone}>{user.mainCouch.email}</Text>
					</View>
				</View>
			</View>
			}

			<View style={styles.card}>
				<Text style={styles.cardHeader}> Информация</Text>
				<View style={styles.cardContainer}>
					<Text style={styles.cardText}>Вес: {user.profile.currentWeight} кг</Text>
					<Text style={styles.cardText}>Рост: {user.profile.currentHeight} см</Text>
				</View>
			</View>
			<View style={styles.card}>
				<Text style={styles.cardHeader}>Активность</Text>
				<View style={styles.cardContainer}>
					<Text style={styles.cardText}>Total Workouts: 50</Text>
					<Text style={styles.cardText}>Calories Burned: 2500</Text>
					<Text style={styles.cardText}>Active Hours: 30</Text>
				</View>
			</View>
			{role === USER_TYPE.CLIENT &&
			<View style={styles.card}>
				<Text style={styles.cardHeader}> InBody</Text>
				<View style={styles.cardContainer}>
				</View>
			</View>
			}
			<Text style={styles.cardHeader}> Достижения</Text>
			<Achievements/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
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
	cardContainer: {
		justifyContent: 'flex-start',
		padding: 8,
		width: "100%"
	},
	cardHeader: {
		fontSize: 12,
		fontWeight: 'bold',
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
	image: {
		borderRadius: 50,
		height: 70,
		marginBottom: 8,
		width: 70,
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
		marginLeft: 8

	},
	phone: {
		color: COLORS.LIGHT_GRAY,
		fontSize: 16,
	},
	profile: {
		alignItems: 'center',
		backgroundColor: COLORS.WHITE,
		borderRadius: 8,
		flexDirection: "column",
		marginBottom: 16,
		padding: 16,
	},
	profileImage: {
		borderRadius: 10000,
		height: 150,
		marginBottom: 8,
		width: 150,
	},
	profileInfo: {
		flexDirection: 'row',
		marginTop: 8,
	},

});