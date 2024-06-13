// src/navigations/ClientNavigator.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, ROUTES} from '@/types/navigation';
import {ClientTabNavigator} from "@/app/navigations/ClientTabNavigation";
import {TrainingPlan} from "@/components/TrainingPlan";
import {TrainersList} from "@/components/TrainersList";
import {Workout} from "@/components/Workout";

const ClientStack = createNativeStackNavigator<RootStackParamList>();

export const ClientNavigator: React.FC = () => {
	return (
		<ClientStack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<ClientStack.Screen name={ROUTES.MAIN} component={ClientTabNavigator} options={{headerShown: false}}/>
			<ClientStack.Screen name={ROUTES.PLAN} component={TrainingPlan}/>
			<ClientStack.Screen name={ROUTES.TRAINERS_LIST} component={TrainersList}/>
			<ClientStack.Screen name={ROUTES.WORKOUT} component={Workout}/>
		</ClientStack.Navigator>
	);
}
