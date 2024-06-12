import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen } from '@/screens/сlient/ProfileScreen';
import {RegistrationScreen} from "@/screens/RegistrationScreen";
import {HomeScreen} from "@/screens/сlient/HomeScreen";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CLIENT_TABS} from "@/types/navigation";
import {View, StyleSheet} from "react-native";
import {COLORS} from "@/constants/Colors";
const Tab = createBottomTabNavigator();

type TabBarIconProps = {
	color: string;
	size: number;
	focused: boolean;
};

const getTabBarIcon = (name: string) => {
	const TabBarIconComponent: React.FC<TabBarIconProps> = ({ color, size, focused }) => (
		<View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
			<Icon name={name} color={focused ? 'white' : color} size={size} />
		</View>
	);

	TabBarIconComponent.displayName = `TabBarIcon(${name})`;

	return TabBarIconComponent;
};
export const ClientTabNavigator: React.FC = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				headerShown: false,
			}}
		>
			<Tab.Screen name={CLIENT_TABS.SETTINGS} component={ProfileScreen} options={{
				tabBarIcon: getTabBarIcon('settings-helper'),
			}}/>
			<Tab.Screen name={CLIENT_TABS.PROFILE} component={ProfileScreen} options={{
				tabBarIcon: getTabBarIcon('account-outline'),
			}}/>
			<Tab.Screen name={CLIENT_TABS.WORKOUTS} component={ProfileScreen} options={{
				tabBarIcon: getTabBarIcon('dumbbell'),
			}}/>
			<Tab.Screen name={CLIENT_TABS.HOME} component={HomeScreen} options={{
				tabBarIcon: getTabBarIcon('home-outline'),
			}}/>
			<Tab.Screen name={CLIENT_TABS.CALENDAR} component={RegistrationScreen} options={{
				tabBarIcon: getTabBarIcon('calendar-range-outline'),
			}}/>
			<Tab.Screen name={CLIENT_TABS.GOALS} component={RegistrationScreen} options={{
				tabBarIcon: getTabBarIcon('crown-outline'),
			}}/>
			<Tab.Screen name={CLIENT_TABS.CLUB} component={RegistrationScreen} options={{
				tabBarIcon: getTabBarIcon('map-marker-radius'),
			}}/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	iconContainer: {
		alignItems: 'center',
		borderRadius: 6,
		justifyContent: 'center',
		padding: 5, // Adds padding around the icon
	},
	iconContainerFocused: {
		backgroundColor: COLORS.DARK_ORANGE, // Background color for the active tab
		borderRadius: 6, // Ensures the background color has rounded corners
	},
});