
// src/components/LevelBlock.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {CircularProgress} from "@/components/CircullarProgress";
import {COLORS} from "@/constants/Colors";
interface ILevelBlockProps {
	level: number;
	points: number;
	pointsToNextLevel: number;
	progress: number; // Progress in percentage (0 to 100)
}

export const LevelBlock = ({ points, progress }: ILevelBlockProps) => {
	return (
		<View style={styles.container}>
			<CircularProgress size={80} strokeWidth={6} progress={progress} />
			<View style={styles.textContainer}>
				<Text style={styles.levelText}>Начинающий Атлет</Text>
				<Text style={styles.pointsText}>{points} очков до следующего уровня</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		borderRadius: 8,
		flexDirection: 'row',
		flexShrink: 1,
		marginBottom: 16,

	},
	levelText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	pointsText: {
		color: COLORS.LIGHT_GRAY,
		flexShrink: 1,
		fontSize: 14,
	},
	textContainer: {
		flexShrink: 1,
		marginLeft: 16,
	},
});
