// components/Achievements.tsx
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "@/constants/Colors";

export interface Achievement {
	image: string;
	label: string;
}


// imageMap.ts
export const imageMap: { [key: string]: any } = {
	'achievment-1': require('../img/achievment-1.png'),
	'achievment-2': require('../img/achievment-2.png'),
	'achievment-3': require('../img/achievment-3.png'),
};


// Example achievements data
export const achievements: Achievement[] = [
	{ image: 'achievment-1', label: 'Ученик недели' },
	{ image: 'achievment-2', label: 'Новая Привычка' },
	{ image: 'achievment-3', label: 'Первая тренировка' },
];

export const Achievements = () => {
	return (
		<View style={styles.achievementsContainer}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{achievements.map((achievement: Achievement, index: number) => (
					<View key={index} style={styles.achievement}>
						<Image source={imageMap[achievement.image]} style={styles.image} />
						<Text style={styles.label}>{achievement.label}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	achievement: {
		alignItems: 'center',
		backgroundColor: COLORS.WHITE,
		borderRadius: 8,
		elevation: 3,
		marginHorizontal: 8,
		padding: 8,
		shadowColor: COLORS.BLACK,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		width: 100,
	},
	achievementsContainer: {
		marginVertical: 16,
	},
	image: {
		borderRadius: 50,
		height: 70,
		marginBottom: 8,
		width: 70,
	},
	label: {
		fontSize: 14,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
