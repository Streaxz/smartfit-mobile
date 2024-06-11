import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect} from 'react';
import 'react-native-reanimated';
import {useColorScheme} from '@/hooks/useColorScheme';
import NavigationContainer from "expo-router/build/fork/NavigationContainer";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList, ROUTES} from "@/types/navigation";
import {TrainerScreen} from "@/screens/TrainerScreen";
import {RegistrationScreen} from "@/screens/RegistrationScreen";
import CustomHeaderButton from "@/components/CustomHeaderButton";
import {MainTabNavigator} from "@/app/navigations/MainTabNavigation";
import * as Linking from 'expo-linking';
import {registerRootComponent} from "expo";
import store from "@/app/store";
import {Provider} from "react-redux";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const prefix = Linking.createURL('/');

const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {
  const linking = {
    prefixes: [
      prefix
    ],
  };
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  //
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isModalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <NavigationContainer
          linking={linking}
        >
          <Stack.Navigator
            initialRouteName={ROUTES.REGISTRATION}
            screenOptions={{
              headerTitle: "",
              headerTransparent: true,
              headerLeft: () => <CustomHeaderButton/>
            }}
          >
            <Stack.Screen name={ROUTES.REGISTRATION} component={RegistrationScreen} options={{headerShown: false}}/>
            <Stack.Screen name={ROUTES.TRAINER_AUTH} component={TrainerScreen}/>
            <Stack.Screen name={ROUTES.CLIENT_AUTH} component={TrainerScreen}/>
            <Stack.Screen name={ROUTES.MAIN} component={MainTabNavigator} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default registerRootComponent(App);
