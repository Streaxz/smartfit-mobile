import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreen } from '@/screens/MainScreen';
import { AnotherScreen } from '@/screens/AnotherScreen';
import {RegistrationScreen} from "@/screens/RegistrationScreen";

const Tab = createBottomTabNavigator();

export const MainTabNavigator: React.FC = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={MainScreen} options={{headerShown: false}}/>
			<Tab.Screen name="Another" component={AnotherScreen} options={{headerShown: false}} />
			<Tab.Screen name="Профиль" component={RegistrationScreen} options={{headerShown: false}} />
		</Tab.Navigator>
	);
};
