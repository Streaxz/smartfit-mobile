import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {COLORS} from "@/constants/Colors";
import {useSelector} from "react-redux";
import {selectUser} from "@/features/auth/authSelectors";
import {NavigationProp, ROUTES} from "@/types/navigation";
import {useNavigation} from "@react-navigation/native";

export const TrainerCard = () => {
	const navigation = useNavigation<NavigationProp>();
	const user = useSelector(selectUser)!;
	return (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate(ROUTES.TRAINERS_LIST);
			}}
		>
		<View style={styles.card}>
			<Text style={styles.cardHeader}>Персональный тренер </Text>
			<View style={styles.profileInfo}>
				<Image
					source={{uri: 'https://via.placeholder.com/150'}}
					style={styles.image}
				/>
				<View style={styles.nameContainer}>
					<Text style={styles.name}>{user.mainCouch!.name}</Text>
					<View style={styles.badges}>
						<View style={styles.badge}>
							<Text style={styles.badge}>Мастер спорта</Text>
						</View>
					</View>
					<Text style={styles.phone}>{user.mainCouch!.email}</Text>
				</View>
			</View>
		</View>
		</TouchableOpacity>
	)
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
	cardHeader: {
		fontSize: 12,
		fontWeight: 'bold',
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
	profileInfo: {
		flexDirection: 'row',
		marginTop: 8,
	},

});