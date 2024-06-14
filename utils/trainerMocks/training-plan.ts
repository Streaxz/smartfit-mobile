import { EDifficulty, TTrainingPlan } from '@/types/trainings';

export const TrainingPlan: TTrainingPlan = {
  id: 'plan1',
  name: 'План тренировки для начинающих',
  duration: 60, // Продолжительность в минутах
  exercises: [
    {
      photos: ['https://via.placeholder.com/50'],
      difficulty: EDifficulty.STARTER,
      name: 'Приседания',
      muscle: 'Ноги',
      additionalMuscle: 'Ягодицы',
      type: 'Силовые',
      equipment: 'Без оборудования',
      sets: 3,
      reps: 15,
      workingWeight: {
        min: 0,
        max: 0,
        recommended: 0,
      },
      restBetweenSets: 60, // 60 секунд
    },
    {
      photos: ['https://via.placeholder.com/50'],
      difficulty: EDifficulty.STARTER,
      name: 'Отжимания',
      muscle: 'Грудь',
      additionalMuscle: 'Трицепс',
      type: 'Силовые',
      equipment: 'Без оборудования',
      sets: 3,
      reps: 12,
      workingWeight: {
        min: 0,
        max: 0,
        recommended: 0,
      },
      restBetweenSets: 60, // 60 секунд
    },
    {
      photos: ['https://via.placeholder.com/50'],
      difficulty: EDifficulty.STARTER,
      name: 'Планка',
      muscle: 'Пресс',
      additionalMuscle: 'Спина',
      type: 'Статические',
      equipment: 'Без оборудования',
      sets: 3,
      reps: 3,
      workingWeight: {
        min: 0,
        max: 0,
        recommended: 0,
      },
      restBetweenSets: 60, // 60 секунд
    },
  ],
  restBetweenExercises: 120, // 120 секунд
  additionalMarks: ['Сосредоточиться на технике выполнения'],
};
