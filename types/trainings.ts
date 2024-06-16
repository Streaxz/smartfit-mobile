import {IUser} from "@/types/user";

export interface Exercise {
  photos: string[];
  difficulty: string;
  name: string;
  muscle: string;
  additionalMuscle: string;
  type: string;
  equipment: string;
  sets: number;
  reps: number;
  restBetweenSets: number;
}

export interface TrainingData {
  exercises: Exercise[];
  restBetweenExercises: number;
  additionalMarks: string[];
}

export type TTrainerClient = {
  id: string;
  name: string;
  avatar: string;
  level: number;
  phone: string;
  nextSession: TTrainSession | null;
};

export enum EDifficulty {
  STARTER = 'Начинающий',
  MIDDLE = 'Средний',
  PRO = 'Профессионал',
}

type TExercise = {
  photos: string[]; // Массив фотографий
  difficulty: EDifficulty; // Сложность упражнения
  name: string; // Название
  muscle: string; // Группа мышц
  additionalMuscle: string; // Дополнительная группа мышц
  type: string; // Тип упражнения
  equipment: string; // Необходимое снаряжение
  sets: number; // Кол-во подходов
  reps: number; // Кол-во повторов
  workingWeight: {
    min: number; // Рабочий вес (мин.) если снаряжение разной тяжести
    max: number; // Рабочий вес (макс.) если снаряжение разной тяжести
    recommended: number; // Рабочий вес (рекомендуемый) если снаряжение разной тяжести
  }; // Рабочий вес если снаряжение разной тяжести
  restBetweenSets: number; // Кол-во секунд отдыха между подходами
};

export type TAiPlanType = {
  exercises: TExercise[];
  restBetweenExercises: number; // Кол-во секунд отдыха между упражнениями
  additionalMarks?: string[]; // Дополнительные заметки
};

export type TTrainingPlan = {
  id: string;
  name: string;
  duration: number;
} & TAiPlanType;

export type TTrainSession = {
  id: string;
  sessionName: string;
  startDate: string;
  duration: number; // in seconds
  location: string;
  trainingPlan: TTrainingPlan;
  trainer: {
    id: string;
    firstName: string;
    lastName: string;
    middleName?: string;
    phone: string;
    level: number;
  };
};

export interface ITraining {
  id: number;
  name: string;
  duration: number;
  startTime: string;
  completed: boolean;
  progress: boolean;
  type: string,
  client: IUser;
  location: string;
}