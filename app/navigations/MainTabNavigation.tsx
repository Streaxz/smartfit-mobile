import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreen } from '@/screens/MainScreen';
import { AnotherScreen } from '@/screens/AnotherScreen';
import {RegistrationScreen} from "@/screens/RegistrationScreen"; // Replace with your actual screen

const Tab = createBottomTabNavigator();

export interface IMainTabNavigationProps {
	isLoggedIn?: boolean;
}
export const MainTabNavigator: React.FC<IMainTabNavigationProps> = ({isLoggedIn}) => {
	console.log(isLoggedIn);
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={MainScreen} options={{headerShown: false}}/>
			<Tab.Screen name="Another" component={AnotherScreen} options={{headerShown: false}} />
			<Tab.Screen name="Профиль" component={RegistrationScreen} options={{headerShown: false}} />
		</Tab.Navigator>
	);
};
