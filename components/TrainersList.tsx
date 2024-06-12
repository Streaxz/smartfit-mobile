import {View, Text, ScrollView, StyleSheet} from "react-native";
import React from "react";
import {COLORS} from "@/constants/Colors";
import CustomHeaderButton from "@/components/CustomHeaderButton";
import {TrainerCard} from "@/components/TrainerCard";

export const TrainersList = () => {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.backButton}>
				<CustomHeaderButton/>
			</View>
			<Text style={styles.title}> Список тренеров</Text>
			{
				Array.from({length: 10}).map((_, index) => (
					<TrainerCard key={index}/>
				))
			}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	backButton: {
		position: "absolute",
		top: 16
	},
	container: {
		backgroundColor: COLORS.CARD_BACKGROUND,
		flex: 1,
		overflow: "scroll",
		padding: 25,
	},
	title: {
		alignSelf: "center",
		color: COLORS.DARK_GRAY,
		fontSize: 16,
		fontWeight: "bold",
		marginTop: 30,
		margin: 16,
	}
});