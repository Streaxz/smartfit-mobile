// src/navigations/TrainerNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES, RootStackParamList } from '@/types/navigation';
import { TrainerScreen } from '@/screens/Trainer/TrainerScreen';

const TrainerStack = createNativeStackNavigator<RootStackParamList>();

export const TrainerNavigator: React.FC = () => {
	return (
		<TrainerStack.Navigator
			initialRouteName={ROUTES.TRAINER_NAV}
		>
			<TrainerStack.Screen name={ROUTES.TRAINER_NAV} component={TrainerScreen} />
		</TrainerStack.Navigator>
	);
};
