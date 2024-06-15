import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { COLORS } from '@/constants/Colors';
import CreateAiTrainingPlanForm from '@/forms/create-ai-training-plan-form';

import { BaseScreenLayout } from '@/components/BaseScreenLayout';
import ContentBlock from '@/components/ContentBlock';
import SearchTitle from '@/components/SearchTitle';

// замените на путь к вашему файлу с цветами

const TrainingPlansScreen: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);

  return (
    <BaseScreenLayout>
      <SearchTitle
        value={searchValue}
        setValue={setSearchValue}
        placeholder="Тренировочные планы"
      />
      <ScrollView>
        <ContentBlock label="Новый тренировочный план">
          <CreateAiTrainingPlanForm
            viewStyles={styles.inputWrapper}
            viewFirstStyles={styles.inputWrapperFirst}
            description="Вы можете описать дополнительные требования которые помогут нейросети составить корректный тренировочный план."
          />
        </ContentBlock>

        <ContentBlock label="Мои планы">
          <View style={styles.plan}>
            <Text style={styles.planTitle}>Бокс</Text>
            <Text style={styles.exercise}>
              Приседания - 6 подходов, 15 повторений
            </Text>
            <Text style={styles.exercise}>
              Отжимания - 3 подхода, 12 повторений
            </Text>
            <Text style={styles.exercise}>Планка - 3 минуты</Text>
            <Text style={styles.moreExercises}>ещё 3 упражнения</Text>
            <TouchableOpacity>
              <Text style={styles.editLink}>Подробнее</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.plan}>
            <Text style={styles.planTitle}>Персональная. Николай</Text>
            <Text style={styles.exercise}>
              Отжимания - 3 подхода, 12 повторений
            </Text>
            <Text style={styles.exercise}>Планка - 3 минуты</Text>
            <Text style={styles.exercise}>
              Приседания - 6 подходов, 15 повторений
            </Text>
            <Text style={styles.moreExercises}>ещё 3 упражнения</Text>
            <TouchableOpacity>
              <Text style={styles.editLink}>Подробнее</Text>
            </TouchableOpacity>
          </View>
        </ContentBlock>

        <ContentBlock label="Планы фитнес-клуба">
          <View style={styles.plan}>
            <Text style={styles.planTitle}>Бокс</Text>
            <Text style={styles.exercise}>
              Приседания - 6 подходов, 15 повторений
            </Text>
            <Text style={styles.exercise}>
              Отжимания - 3 подхода, 12 повторений
            </Text>
            <Text style={styles.exercise}>Планка - 3 минуты</Text>
            <Text style={styles.moreExercises}>ещё 3 упражнения</Text>
            <TouchableOpacity>
              <Text style={styles.editLink}>Подробнее</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.plan}>
            <Text style={styles.planTitle}>Персональная. Николай</Text>
            <Text style={styles.exercise}>
              Отжимания - 3 подхода, 12 повторений
            </Text>
            <Text style={styles.exercise}>Планка - 3 минуты</Text>
            <Text style={styles.exercise}>
              Приседания - 6 подходов, 15 повторений
            </Text>
            <Text style={styles.moreExercises}>ещё 3 упражнения</Text>
            <TouchableOpacity>
              <Text style={styles.editLink}>Подробнее</Text>
            </TouchableOpacity>
          </View>
        </ContentBlock>
      </ScrollView>
    </BaseScreenLayout>
  );
};

const styles = StyleSheet.create({
  aiButton: {
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY_100,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    paddingVertical: 12,
    width: '100%',
  },
  aiButtonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: COLORS.LIGHT_GRAY,
    fontSize: 14,
    marginBottom: 16,
  },
  editLink: {
    color: COLORS.TINT_COLOR_LIGHT,
    fontSize: 14,
    marginTop: 8,
  },
  exercise: {
    color: COLORS.LIGHT_GRAY,
    fontSize: 14,
  },
  inputWrapper: {
    width: '100%',
  },
  inputWrapperFirst: {
    marginTop: 18,
  },
  moreExercises: {
    color: COLORS.GRAY,
    fontSize: 14,
    marginTop: 4,
  },
  plan: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  planTitle: {
    color: COLORS.DARK_GRAY,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default TrainingPlansScreen;
