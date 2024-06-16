import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from '@/constants/Colors';
import { ClientsListScreen } from '@/screens/trainer/ClientsListScreen';
import TrainingPlansScreen from '@/screens/trainer/TrainingPlansScreen';
import { HomeScreen } from '@/screens/сlient/HomeScreen';
import { TRAINER_TABS } from '@/types/navigation';
import {TrainingListScreen} from "@/screens/trainer/TrainingListScreen";
import {HomeTrainer} from "@/screens/trainer/HometrainerScreen";

const Tab = createBottomTabNavigator();

type TabBarIconProps = {
  color: string;
  size: number;
  focused: boolean;
};

const getTabBarIcon = (name: string) => {
  const TabBarIconComponent: React.FC<TabBarIconProps> = ({
    color,
    size,
    focused,
  }) => (
    <View
      style={[styles.iconContainer, focused && styles.iconContainerFocused]}
    >
      <Icon name={name} color={focused ? 'white' : color} size={size} />
    </View>
  );

  TabBarIconComponent.displayName = `TabBarIcon(${name})`;

  return TabBarIconComponent;
};
export const TrainerTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
      initialRouteName={'Index'}
    >
      <Tab.Screen
        name={'Index'}
        component={HomeTrainer}
        options={{
          tabBarIcon: getTabBarIcon('home-outline'),
        }}
      />
      {/*<Tab.Screen*/}
      {/*  name={TRAINER_TABS.CLIENT_PAGE}*/}
      {/*  component={ClientInfoScreen}*/}
      {/*/>*/}
      <Tab.Screen
        name={TRAINER_TABS.CLIENTS_LIST}
        component={ClientsListScreen}
        options={{
          tabBarIcon: getTabBarIcon('account-group'),
        }}
      />
      <Tab.Screen
        name={TRAINER_TABS.TRAINING_PLANS}
        component={TrainingPlansScreen}
        options={{
          tabBarIcon: getTabBarIcon('notebook-outline'),
        }}
      />
      <Tab.Screen
        name={TRAINER_TABS.TRAINING_LIST}
        component={TrainingListScreen}
        options={{
          tabBarIcon: getTabBarIcon('dumbbell'),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    borderRadius: 6,
    justifyContent: 'center',
    padding: 5, // Adds padding around the icon
  },
  iconContainerFocused: {
    backgroundColor: COLORS.ORANGE, // Background color for the active tab
    borderRadius: 6, // Ensures the background color has rounded corners
  },
});
