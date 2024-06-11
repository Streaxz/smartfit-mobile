import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export enum ROUTES {
	REGISTRATION = 'Registration',
	TRAINER_AUTH = 'TrainerAuth',
	CLIENT_AUTH = 'ClientAuth',
	MAIN = 'Main',
}

export type RootStackParamList = {
	[ROUTES.REGISTRATION]: undefined;
	[ROUTES.TRAINER_AUTH]: undefined;
	[ROUTES.CLIENT_AUTH]: undefined;
	[ROUTES.MAIN]: undefined;
};
export type RegistrationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, ROUTES.REGISTRATION>;