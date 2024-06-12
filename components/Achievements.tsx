import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Achievement, achievements} from "@/screens/сlient/ProfileScreen";
import {COLORS} from "@/constants/Colors";

export const Achievements = () => {
	return (
		<View style={styles.achievementsContainer}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{achievements.map((achievement: Achievement, index: number) => (
					<View key={index} style={styles.achievement}>
						<Image source={{ uri: achievement.image }} style={styles.image} />
						<Text style={styles.label}>{achievement.label}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	)
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