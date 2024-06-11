import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreen } from '@/screens/MainScreen';
import { AnotherScreen } from '@/screens/AnotherScreen';
import {RegistrationScreen} from "@/screens/RegistrationScreen";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const MainTabNavigator: React.FC = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={MainScreen} options={{headerShown: false, tabBarIcon: ({color, size}) => (
					<MaterialCommunityIcons
						name="home"
						color={color}
						size={size}
					/>
				),
			}}/>
			<Tab.Screen name="Another" component={AnotherScreen} options={{headerShown: false, tabBarIcon: ({color, size}) => (
					<MaterialCommunityIcons
						name="account-box"
						color={color}
						size={size}
					/>
				),}} />
			<Tab.Screen name="Профиль" component={RegistrationScreen} options={{headerShown: false, tabBarIcon: ({color, size}) => (
					<MaterialCommunityIcons
						name="account-box"
						color={color}
						size={size}
					/>
				),}} />
		</Tab.Navigator>
	);
};
