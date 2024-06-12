import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {selectUser} from "@/features/auth/authSelectors";
import {useSelector} from "react-redux";
import {COLORS} from "@/constants/Colors";

export const ProfileScreen: React.FC = () => {
	const user = useSelector(selectUser)!;
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Text style={styles.cardHeader}> Вы </Text>
				<View style={styles.profileInfo}>
					<Image
						source={{uri: 'https://via.placeholder.com/150'}}
						style={styles.profileImage}
					/>
					<View style={styles.nameContainer}>
						<Text style={styles.name}>{user.name}</Text>
						<View style={styles.badges}>
							<View style={styles.badge}>
							<Text style={styles.badge}>2 уровень</Text>
							</View>
						</View>
						<Text style={styles.phone}>{user.email}</Text>
					</View>
				</View>
			</View>
			<View style={styles.card}>
				<Text style={styles.cardHeader}> Информация</Text>
				<View style={styles.cardContainer}>
					<Text style={styles.cardText}>Вес: {user.profile.currentWeight} кг</Text>
					<Text style={styles.cardText}>Рост: {user.profile.currentHeight} см</Text>
				</View>
			</View>
			<View style={styles.card}>
				<Text style={styles.cardHeader}> InBody</Text>
				<View style={styles.cardContainer}>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	badge: {
		backgroundColor: COLORS.DARK_BACKGROUND,
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
		margin: 8,
	},
	cardHeader: {
		fontSize: 12,
		fontWeight: 'bold',
	},
	cardText: {
		color: COLORS.DARK_BACKGROUND,
		fontSize: 12,
	},
	container: {
		backgroundColor: COLORS.CARD_BACKGROUND,
		flex: 1,
		padding: 25,
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
		color: COLORS.DARK_BACKGROUND,
		fontSize: 16,
	},
	profileImage: {
		borderRadius: 50,
		height: 70,
		marginBottom: 8,
		width: 70,
	},
	profileInfo: {
		flexDirection: 'row',
		marginTop: 8,
	},
});