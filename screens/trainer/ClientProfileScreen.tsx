import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { COLORS } from '@/constants/Colors';
import { trainerClientSelector } from '@/features/trainer/clientsInfo/selectors';
import { fetchTrainerClient } from '@/features/trainer/clientsInfo/slices/clientSlice';
import { EPayloadStatus } from '@/types/api';
import dayjs from 'dayjs';

import { BaseScreenLayout } from '@/components/BaseScreenLayout';

type RouteParams = {
  clientId: string;
};

const ClientProfileScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { clientId } = route.params as RouteParams;
  const dispatch = useAppDispatch();
  const { client, status } = useAppSelector(trainerClientSelector);

  useEffect(() => {
    dispatch(fetchTrainerClient(clientId));
  }, [dispatch, clientId]);

  if (!client || status === EPayloadStatus.loading) {
    return (
      <BaseScreenLayout>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Загрузка</Text>
          </View>
        </ScrollView>
      </BaseScreenLayout>
    );
  }

  return (
    <BaseScreenLayout>
      <ScrollView style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: client.avatar }} style={styles.avatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{client.name}</Text>
            <Text style={styles.phone}>{client.phone}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Следующее занятие</Text>
          <View style={styles.sessionInfo}>
            <Text style={styles.sessionTime}>
              {dayjs(client.nextSession?.startDate).format('DD.MM.YYYY HH:mm')}
            </Text>
            <Text style={styles.sessionDuration}>
              {(client.nextSession?.duration ?? 0) / 60} мин
            </Text>
            <Text style={styles.sessionTrainer}>
              Тренер: {client.nextSession?.trainer?.firstName}
            </Text>
            <Text style={styles.sessionType}>
              {client.nextSession?.sessionName}
            </Text>
            <Text style={styles.sessionLocation}>
              {client.nextSession?.location}
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Тренировочный план</Text>
          {client.nextSession?.trainingPlan?.exercises?.map(
            (exercise, index) => (
              <View key={index} style={styles.exercise}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseDetails}>
                  {`${exercise.reps} подходов, ${exercise.sets} повторов`}
                </Text>
              </View>
            )
          )}
        </View>
        <Button title="Назад к списку" onPress={navigation.goBack} />
      </ScrollView>
    </BaseScreenLayout>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    height: 100,
    marginRight: 16,
    width: 100,
  },
  container: {
    flex: 1,
  },
  exercise: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  exerciseDetails: {
    color: COLORS.LIGHT_GRAY,
    fontSize: 16,
  },
  exerciseName: {
    color: COLORS.BLACK_100,
    fontSize: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  phone: {
    color: COLORS.BLACK_200,
    fontSize: 16,
  },
  profileContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
  },
  profileInfo: {
    flex: 1,
  },
  section: {
    backgroundColor: COLORS.WHITE_100,
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sessionDuration: {
    color: COLORS.BLACK_100,
    fontSize: 16,
  },
  sessionInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  sessionLocation: {
    color: COLORS.BLACK_100,
    fontSize: 16,
  },
  sessionTime: {
    color: COLORS.PRIMARY_100,
    fontSize: 16,
  },
  sessionTrainer: {
    color: COLORS.BLACK_200,
    fontSize: 16,
  },
  sessionType: {
    color: COLORS.BLACK_200,
    fontSize: 16,
  },
});

export default ClientProfileScreen;
