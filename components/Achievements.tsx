// components/Achievements.tsx
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import { COLORS } from "@/constants/Colors";

export interface Achievement {
	image: string;
	label: string;
	description: string;
}

// imageMap.ts
export const imageMap: { [key: string]: any } = {
	'achievment-1': require('../img/achievment-1.png'),
	'achievment-2': require('../img/achievment-2.png'),
	'achievment-3': require('../img/achievment-3.png'),
};

// Example achievements data
export const achievements: Achievement[] = [
	{ image: 'achievment-1', label: 'Ученик недели', description: 'Выполните все запланированные тренировки за неделю.' },
	{ image: 'achievment-2', label: 'Новая Привычка', description: 'Посетите фитнес-клуб 10 раз за месяц.' },
	{ image: 'achievment-3', label: 'Первая тренировка', description: 'Посетите первое занятие с тренером.' },
];

export const Achievements = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

	const openModal = (achievement: Achievement) => {
		setSelectedAchievement(achievement);
		setModalVisible(true);
	};

	const closeModal = () => {
		setModalVisible(false);
		setSelectedAchievement(null);
	};

	return (
		<View style={styles.achievementsContainer}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{achievements.map((achievement: Achievement, index: number) => (
					<TouchableOpacity key={index} style={styles.achievement} onPress={() => openModal(achievement)}>
						<Image source={imageMap[achievement.image]} style={styles.image} />
						<Text style={styles.label}>{achievement.label}</Text>
					</TouchableOpacity>
				))}
			</ScrollView>

			{selectedAchievement && (
				<Modal
					visible={modalVisible}
					transparent={true}
					animationType="fade"
					onRequestClose={closeModal}
				>
					<View style={styles.modalOverlay}>
						<View style={styles.modalContent}>
							<Text style={styles.modalTitle}>{selectedAchievement.label}</Text>
							<Image source={imageMap[selectedAchievement.image]} style={styles.image} />
							<Text style={styles.modalDescription}>{selectedAchievement.description}</Text>
							<TouchableOpacity
								style={styles.aiButton}
								onPress={closeModal}
							>
								<Text style={styles.aiButtonText}>Закрыть</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
			)}
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
	aiButton: {
		alignItems: 'center',
		backgroundColor: COLORS.PRIMARY_100,
		borderRadius: 8,
		display: 'flex',
		flexDirection: 'row',
		gap: 8,
		justifyContent: 'center',
		paddingVertical: 12,
		width: '100%',
	},
	aiButtonText: {
		color: COLORS.WHITE,
		fontSize: 16,
		fontWeight: 'bold',
	},
	image: {
		height: 70,
		marginBottom: 8,
		width: 70,
	},
	label: {
		fontSize: 14,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalContent: {
		alignItems: 'center',
		backgroundColor: COLORS.WHITE,
		borderRadius: 8,
		padding: 16,
		width: 300,
	},
	modalDescription: {
		fontSize: 16,
		marginBottom: 16,
		textAlign: 'center',
	},
	modalOverlay: {
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		flex: 1,
		justifyContent: 'center',
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 8,
	},
});
