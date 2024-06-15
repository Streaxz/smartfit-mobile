import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '@/constants/Colors';
import {NavigationProp, ROUTES, TRAINER_TABS} from '@/types/navigation';

export const RegistrationScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.trainerButton]}
          onPress={() =>
            navigation.navigate(ROUTES.TRAINER_NAV, {
              screen: TRAINER_TABS.HOME,
            })
          }
        >
          <Text style={styles.buttonText}>я тренер</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.clientButton]}
          onPress={() => navigation.navigate(ROUTES.CLIENT_AUTH)}
        >
          <Text style={styles.buttonText}>я клиент</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: ROUTES.CLIENT_NAV, params: {screen: ROUTES.MAIN}}],
            })
          }
        >
          <Text style={styles.skipButtonText}>Пропустить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 15,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    width: '80%',
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  clientButton: {
    backgroundColor: COLORS.DARK_ORANGE,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  skipButton: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  skipButtonText: {
    color: COLORS.BLACK,
    fontSize: 16,
    fontWeight: 'bold',
  },
  trainerButton: {
    backgroundColor: COLORS.GRAY, // Pink background for trainer button
  },
});
