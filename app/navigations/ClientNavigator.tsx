// src/navigations/ClientNavigator.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, ROUTES} from '@/types/navigation';
import {ClientTabNavigator} from "@/app/navigations/ClientTabNavigation";

const ClientStack = createNativeStackNavigator<RootStackParamList>();

export const ClientNavigator: React.FC = () => {
	return (
		<ClientStack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<ClientStack.Screen name={ROUTES.MAIN} component={ClientTabNavigator} options={{headerShown: false}}/>

		</ClientStack.Navigator>
	);
}
