import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useAppSelector } from '@/app/hooks';
import { COLORS } from '@/constants/Colors';
import { selectTrainingPlanCreate } from '@/features/trainer/trainingPlans/selectors';

import { BaseScreenLayout } from '@/components/BaseScreenLayout';

const TrainingPlanScreen: React.FC = () => {
  const {
    aiData: { pending, error, response },
    name,
  } = useAppSelector(selectTrainingPlanCreate);

  const navigation = useNavigation();

  const handleSavePlan = useCallback(() => {
    console.log('saving');
  }, []);

  return (
    <BaseScreenLayout>
      <ScrollView style={styles.container}>
        {pending && (
          <ActivityIndicator size="large" color={COLORS.PRIMARY_100} />
        )}
        {error && (
          <View style={styles.container}>
            <Text style={styles.error}>
              Произошла ошибка при создании плана
            </Text>
          </View>
        )}
        {response && (
          <View style={styles.planContainer}>
            <Text style={styles.planTitle}>{name}</Text>
            <Text style={styles.planDuration}>
              {/*Продолжительность: {response.duration} минут*/}
            </Text>
            <Text style={styles.sectionTitle}>Упражнения</Text>
            {response.exercises.map((exercise, index) => (
              <View key={index} style={styles.exerciseContainer}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseDetails}>
                  Сложность: {exercise.difficulty}
                </Text>
                <Text style={styles.exerciseDetails}>
                  Группа мышц: {exercise.muscle}
                </Text>
                <Text style={styles.exerciseDetails}>
                  Доп. группа: {exercise.additionalMuscle}
                </Text>
                <Text style={styles.exerciseDetails}>Тип: {exercise.type}</Text>
                <Text style={styles.exerciseDetails}>
                  Снаряжение: {exercise.equipment}
                </Text>
                <Text style={styles.exerciseDetails}>
                  Подходы: {exercise.sets}
                </Text>
                <Text style={styles.exerciseDetails}>
                  Повторения: {exercise.reps}
                </Text>
                <Text style={styles.exerciseDetails}>
                  Рабочий вес: {exercise.workingWeight.recommended} кг
                </Text>
                <Text style={styles.exerciseDetails}>
                  Отдых между подходами: {exercise.restBetweenSets} сек
                </Text>
                {exercise.photos.map((photo, photoIndex) => (
                  <Image
                    key={photoIndex}
                    source={{ uri: photo }}
                    style={styles.exercisePhoto}
                  />
                ))}
              </View>
            ))}
            <Text style={styles.sectionTitle}>Дополнительные заметки</Text>
            {response.additionalMarks &&
              response.additionalMarks.map((mark, index) => (
                <Text key={index} style={styles.additionalMark}>
                  {mark}
                </Text>
              ))}
          </View>
        )}
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSavePlan}
        disabled={pending}
      >
        <Text style={styles.buttonText}>Сохранить план</Text>
        <Icon name={'auto-fix'} color={'white'} size={18} />
      </TouchableOpacity>
      <Button
        color={COLORS.PRIMARY_200}
        title="Назад к списку"
        onPress={navigation.goBack}
      />
    </BaseScreenLayout>
  );
};

const styles = StyleSheet.create({
  additionalMark: {
    color: COLORS.GRAY,
    fontSize: 14,
    marginBottom: 4,
  },
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY_100,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    marginBottom: 12,
    marginTop: 12,
    paddingVertical: 12,
    width: '100%',
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: COLORS.WHITE_200,
    flex: 1,
  },
  error: {
    color: COLORS.RED,
    fontSize: 18,
    marginBottom: 20,
  },
  exerciseContainer: {
    marginBottom: 16,
  },
  exerciseDetails: {
    color: COLORS.LIGHT_GRAY,
    fontSize: 14,
  },
  exerciseName: {
    color: COLORS.DARK_GRAY,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  exercisePhoto: {
    borderRadius: 8,
    height: 100,
    marginTop: 8,
    width: 100,
  },
  planContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    padding: 16,
  },
  planDuration: {
    color: COLORS.GRAY,
    fontSize: 16,
    marginBottom: 16,
  },
  planTitle: {
    color: COLORS.DARK_GRAY,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionTitle: {
    color: COLORS.DARK_GRAY,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default TrainingPlanScreen;
