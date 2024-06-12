import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export enum ROUTES {
	REGISTRATION = 'Registration',
	TRAINER_AUTH = 'TrainerAuth',
	TRAINER_NAV = 'TrainerNav',
	CLIENT_AUTH = 'ClientAuth',
	CLIENT_NAV = 'ClientNav',
	MAIN = 'Main',
}

export type RootStackParamList = {
	[ROUTES.REGISTRATION]: undefined;
	[ROUTES.TRAINER_AUTH]: undefined;
	[ROUTES.CLIENT_AUTH]: undefined;
	[ROUTES.MAIN]: undefined;
	[ROUTES.TRAINER_NAV]: { screen: ROUTES };
	[ROUTES.CLIENT_NAV]: { screen: ROUTES };
};

export type RegistrationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, ROUTES.REGISTRATION>;

export enum CLIENT_TABS {
	HOME= 'Home',
	SETTINGS= 'Settings',
	PROFILE= 'Profile',
	CALENDAR= 'Calendar',
	WORKOUTS= 'Workouts',
	GOALS= 'Goals',
	CLUB= 'Club',
}