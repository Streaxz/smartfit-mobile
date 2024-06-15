import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

import { MainNavigator } from '@/app/navigations/MainNavigator';
import store from '@/app/store';
import { useColorScheme } from '@/hooks/useColorScheme';
import dayjs from 'dayjs';
import dayjsRuLocale from 'dayjs/locale/ru';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
dayjs.locale(dayjsRuLocale);

function App() {
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
        <MainNavigator />
      </ThemeProvider>
    </Provider>
  );
}

registerRootComponent(App);

export default App;
