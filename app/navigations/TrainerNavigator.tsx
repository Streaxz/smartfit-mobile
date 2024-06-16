// src/navigations/TrainerNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { TrainerTabNavigator } from '@/app/navigations/TrainerTabNavigation';
import ClientProfileScreen from '@/screens/trainer/ClientProfileScreen';
import TrainingPlanScreen from '@/screens/trainer/TrainingPlanCreateScreen';
import { ROUTES, RootStackParamList, TRAINER_TABS } from '@/types/navigation';
import {TrainingListScreen} from "@/screens/trainer/TrainingListScreen";
import {TrainerWorkout} from "@/components/TrainerWorkout";

const TrainerStack = createNativeStackNavigator<RootStackParamList>();

export const TrainerNavigator: React.FC = () => {
  return (
    <TrainerStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TrainerStack.Screen
        name={ROUTES.TRAINER_NAV}
        component={TrainerTabNavigator}
      />
      <TrainerStack.Screen
        name={TRAINER_TABS.CLIENT_PAGE}
        component={ClientProfileScreen}
      />
      <TrainerStack.Screen
        name={TRAINER_TABS.TRAINING_PLAN_CREATE}
        component={TrainingPlanScreen}
      />
      <TrainerStack.Screen
        name={TRAINER_TABS.TRAINING_LIST}
        component={TrainingListScreen}
      />
      <TrainerStack.Screen
        name={TRAINER_TABS.WORKOUT}
        component={TrainerWorkout}
      />
    </TrainerStack.Navigator>
  );
};
