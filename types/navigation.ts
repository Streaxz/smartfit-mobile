import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export type RootStackParamList = {
	Registration: undefined;
	TrainerAuth: undefined;
	ClientAuth: undefined;
	Main: undefined;
};

export type RegistrationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Registration'>;