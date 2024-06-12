import NavigationContainer from "expo-router/build/fork/NavigationContainer";
import {RootStackParamList, ROUTES} from "@/types/navigation";
import CustomHeaderButton from "@/components/CustomHeaderButton";
import {RegistrationScreen} from "@/screens/RegistrationScreen";
import {TrainerNavigator} from "@/app/navigations/TrainerNavigator";
import {ClientNavigator} from "@/app/navigations/ClientNavigator";
import {TrainerRegistration} from "@/screens/trainer/TrainerRegistration";
import React from "react";
import * as Linking from "expo-linking";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ClientRegistration} from "@/screens/сlient/ClientRegistration";

const prefix = Linking.createURL('/');

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
	const linking = {
		prefixes: [
			prefix
		],
	};
	return (
		<NavigationContainer
			linking={linking}
		>
			<Stack.Navigator
				initialRouteName={ROUTES.REGISTRATION}
				screenOptions={{
					headerTitle: "",
					headerTransparent: true,
					headerLeft: () => <CustomHeaderButton/>,
				}}
			>
				<Stack.Screen name={ROUTES.REGISTRATION} component={RegistrationScreen} options={{headerShown: false}}/>
				<Stack.Screen name={ROUTES.TRAINER_NAV} component={TrainerNavigator} options={{headerShown: false}}/>
				<Stack.Screen name={ROUTES.TRAINER_AUTH} component={TrainerRegistration} />
				<Stack.Screen name={ROUTES.CLIENT_NAV} component={ClientNavigator} options={{headerShown: false}}/>
				<Stack.Screen name={ROUTES.CLIENT_AUTH} component={ClientRegistration} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}