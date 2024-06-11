// src/navigations/ClientNavigator.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, ROUTES} from '@/types/navigation';
import {ClientScreen} from "@/screens/Client/ClientScreen";

const ClientStack = createNativeStackNavigator<RootStackParamList>();

export const ClientNavigator: React.FC = () => {
	return (
		<ClientStack.Navigator
			initialRouteName={ROUTES.CLIENT_NAV}
		>
			<ClientStack.Screen name={ROUTES.CLIENT_NAV} component={ClientScreen}/>
		</ClientStack.Navigator>
	);
}
