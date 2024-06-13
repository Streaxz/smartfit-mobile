
// src/components/CircularProgress.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import {COLORS} from "@/constants/Colors";

interface ICircularProgressProps {
	size: number;
	strokeWidth: number;
	progress: number; // Progress in percentage (0 to 100)
	progressText?: string;
}

export const CircularProgress = ({ size, strokeWidth, progress, progressText }: ICircularProgressProps) => {
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset = circumference - (progress / 100) * circumference;

	return (
		<View style={{ width: size, height: size }}>
			<Svg width={size} height={size} style={styles.progressBar}>
				<G rotation="-90" originX={size / 2} originY={size / 2}>
					<Circle
						stroke="#00e676"
						cx={size / 2}
						cy={size / 2}
						r={radius}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						fill="none"
						strokeDasharray={circumference}
						strokeDashoffset={strokeDashoffset}
					/>
				</G>
			</Svg>
			<View style={styles.labelContainer}>
				<Text style={styles.label}>{progressText || '2'}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	label: {
		color: COLORS.WHITE,
		fontSize: 24,
		fontWeight: 'bold',
	},
	labelContainer: {
		alignItems: 'center',
		backgroundColor: COLORS.DARK_GRAY,
		borderRadius: 10000,
		bottom: 0,
		justifyContent: 'center',
		left: 0,
		position: 'absolute',
		right: 0,
		top: 0,
	},
	progressBar: {
		zIndex: 2,
	}
});
