// src/navigations/TrainerNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { TrainerTabNavigator } from '@/app/navigations/TrainerTabNavigation';
import ClientProfileScreen from '@/screens/trainer/ClientProfileScreen';
import { ROUTES, RootStackParamList, TRAINER_TABS } from '@/types/navigation';

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
    </TrainerStack.Navigator>
  );
};
