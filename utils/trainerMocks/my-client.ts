import { TTrainerClient } from '@/types/trainings';
import { TrainingPlan } from '@/utils/trainerMocks/training-plan';

export const MyClientMock: TTrainerClient = {
  id: '1',
  name: 'Иван Иванов',
  avatar: 'https://via.placeholder.com/100',
  level: 3,
  phone: '+7 (123) 456-78-90',
  nextSession: {
    id: 'session1',
    sessionName: 'Утренняя тренировка',
    startDate: '2024-06-14T09:00:00',
    duration: 3600, // 1 час в секундах
    trainingPlan: TrainingPlan,
    trainer: {
      id: 'trainer1',
      firstName: 'Николай',
      lastName: 'Сергеев',
      middleName: 'В.',
      phone: '+7 (123) 456-78-90',
      level: 5,
    },
  },
};
