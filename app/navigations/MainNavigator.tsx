import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ClientNavigator } from '@/app/navigations/ClientNavigator';
import { TrainerNavigator } from '@/app/navigations/TrainerNavigator';
import { RegistrationScreen } from '@/screens/RegistrationScreen';
import { TrainerRegistration } from '@/screens/trainer/TrainerRegistration';
import { ClientRegistration } from '@/screens/сlient/ClientRegistration';
import { ROUTES, RootStackParamList } from '@/types/navigation';
import * as Linking from 'expo-linking';
import NavigationContainer from 'expo-router/build/fork/NavigationContainer';

import CustomHeaderButton from '@/components/CustomHeaderButton';

const prefix = Linking.createURL('/');

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  const linking = {
    prefixes: [prefix],
  };
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName={ROUTES.REGISTRATION}
        screenOptions={{
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => <CustomHeaderButton />,
        }}
      >
        <Stack.Screen
          name={ROUTES.REGISTRATION}
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.TRAINER_NAV}
          component={TrainerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.TRAINER_AUTH}
          component={TrainerRegistration}
        />
        <Stack.Screen
          name={ROUTES.CLIENT_NAV}
          component={ClientNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.CLIENT_AUTH}
          component={ClientRegistration}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
