import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {selectUser, selectUserRole} from "@/features/auth/authSelectors";
import {useSelector} from "react-redux";
import {COLORS} from "@/constants/Colors";
import {USER_TYPE} from "@/types/user";
import {LevelBlock} from "@/components/LevelBlock";
import {Achievements} from "@/components/Achievements";
import {TrainerCard} from "@/components/TrainerCard";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {BaseScreenLayout} from "@/components/BaseScreenLayout";
import * as ImagePicker from 'expo-image-picker';
// import {pick} from "query-string";
import axios from "axios";
// import {match} from "node:assert";

export const ProfileScreen: React.FC = () => {
	const user = useSelector(selectUser)!;
	const role = useSelector(selectUserRole)!;

	// Calculate progress percentage for the circular progress bar
	const progress = (20 / 100) * 100;

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			// allowsEditing: true,
			quality: 1,
		});

		if (result.canceled) {
			return;
		}


		// console.log(result);

		const localUri = result.assets[0].uri;
		const filename = localUri.split('/').pop();
		if(!filename) return;

		const match = /\.(\w+)$/.exec(filename);
		const type = match ? `image/${match[1]}` : `image`;
		
		const formData = new FormData();
		// formData.append('photo', { uri: localUri, name: filename, type });
		formData.append('file', {
			uri: localUri,
			name: filename,
			type
		} as any )
		// console.log(formData['_parts'][0][1]);

		try {
			await axios.post('http://147.45.252.181:8054/get-inbody', formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
			})
			// console.log(done)
		} catch (e) {
			console.log(e)
		}

		if (!result.canceled) {
			// setImage(result.assets[0].uri);
		}
	};
	return (
		<BaseScreenLayout>
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
					<Text style={styles.cardText}>07.07.2000</Text>
				</View>
				<View style={styles.cardContainer}>
					<Text style={styles.cardTextTitle}>Пол</Text>
					<Text style={styles.cardText}>Мужской</Text>
				</View>
			</View>
			{role === USER_TYPE.CLIENT &&
			<View style={styles.card}>
				<LevelBlock level={2} points={230} pointsToNextLevel={1000} progress={progress} />

			</View>
			}
			{role === USER_TYPE.CLIENT && user.mainCouch &&
				<TrainerCard/>
			}

			<View style={styles.card}>
				<Text style={styles.cardHeader}> Информация</Text>
				<View style={styles.cardContainer}>
					<Text style={styles.cardText}>Вес: {user.profile.currentWeight} кг</Text>
					<Text style={styles.cardText}>Рост: {user.profile.currentHeight} см</Text>
				</View>
			</View>
			{/*<View style={styles.card}>*/}
			{/*	<Text style={styles.cardHeader}>Активность</Text>*/}
			{/*	<View style={styles.cardContainer}>*/}
			{/*		<Text style={styles.cardText}>Total Workouts: 50</Text>*/}
			{/*		<Text style={styles.cardText}>Calories Burned: 2500</Text>*/}
			{/*		<Text style={styles.cardText}>Active Hours: 30</Text>*/}
			{/*	</View>*/}
			{/*</View>*/}
			{role === USER_TYPE.CLIENT &&
			<View style={styles.card}>
				<Text style={styles.cardHeader}> InBody</Text>
				<View style={styles.cardContainer}>
            <TouchableOpacity
                style={styles.aiButton}
								onPress={pickImage}
                // onPress={handleSubmit(onSubmit)}
                // disabled={pending}
            >
                <Text style={styles.aiButtonText}>Добавить InBody</Text>
                <Icon name={'auto-fix'} color={'white'} size={18} />
            </TouchableOpacity>
				</View>
			</View>
			}
			{role == USER_TYPE.CLIENT &&
					<>
						<Text style={styles.cardHeader}> Достижения</Text>
						<Achievements/>
          </>
			}
		</ScrollView>
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
		padding: 0
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
});