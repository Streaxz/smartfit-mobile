import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export enum ROUTES {
	REGISTRATION = 'Registration',
	TRAINER_AUTH = 'TrainerAuth',
	TRAINER_NAV = 'TrainerNav',
	TRAINERS_LIST = 'TrainersList',
	WORKOUT = 'Workout',
	CLIENT_AUTH = 'ClientAuth',
	CLIENT_NAV = 'ClientNav',
	MAIN = 'Main',
	PLAN = 'Plan',
}

export type RootStackParamList = {
	[ROUTES.REGISTRATION]: undefined;
	[ROUTES.TRAINER_AUTH]: undefined;
	[ROUTES.CLIENT_AUTH]: undefined;
	[ROUTES.MAIN]: undefined;
	[ROUTES.PLAN]: undefined;
	[ROUTES.WORKOUT]: undefined;
	[ROUTES.TRAINERS_LIST]: undefined;
	[ROUTES.TRAINER_NAV]: { screen: ROUTES };
	[ROUTES.CLIENT_NAV]: { screen: ROUTES };
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export enum CLIENT_TABS {
	HOME= 'Home',
	SETTINGS= 'Settings',
	PROFILE= 'Profile',
	CALENDAR= 'Calendar',
	WORKOUTS= 'Workouts',
	GOALS= 'Goals',
	CLUB= 'Club',
}