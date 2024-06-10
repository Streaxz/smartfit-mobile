import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreen from './screens/MainScreen.tsx';
import CoachScreen from './screens/CouchScreen.tsx';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen.tsx';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TrainingScreen from './screens/TrainingScreen.tsx';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home(): React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'login'}
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'main'}
        component={InnerScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function InnerScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'Profile'}
        options={{
          headerShown: false,
          title: 'Профиль',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-box"
              color={color}
              size={size}
            />
          ),
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name={'Training'}
        options={{
          headerShown: false,
          title: 'Тренировка',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="calendar-month"
              color={color}
              size={40}
            />
          ),
        }}
        component={TrainingScreen}
      />
      <Tab.Screen
        name={'Couch'}
        options={{
          headerShown: false,
          title: 'Тренеры',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="star" color={color} size={size} />
          ),
        }}
        component={CoachScreen}
      />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
}

export default App;
