// src/navigations/TrainerNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES, RootStackParamList } from '@/types/navigation';
import { TrainerRegistration } from '@/screens/trainer/TrainerRegistration';

const TrainerStack = createNativeStackNavigator<RootStackParamList>();

export const TrainerNavigator: React.FC = () => {
	return (
		<TrainerStack.Navigator
			initialRouteName={ROUTES.TRAINER_NAV}
			screenOptions={{
				headerShown: false,
			}}
		>
			<TrainerStack.Screen name={ROUTES.TRAINER_AUTH} component={TrainerRegistration}  />
		</TrainerStack.Navigator>
	);
};
