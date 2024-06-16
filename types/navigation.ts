import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum ROUTES {
  REGISTRATION = 'Registration',
  TRAINER_AUTH = 'TrainerAuth',
  TRAINER_NAV = 'TrainerNav',
  TRAINERS_LIST = 'TrainersList',
  WORKOUT = 'Workout',
  CLIENT_AUTH = 'ClientAuth',
  CLIENT_NAV = 'ClientNav',
  MAIN = 'Main',
  PLAN = 'Plan',
}

export type RootStackParamList = {
  [ROUTES.REGISTRATION]: undefined;
  [ROUTES.TRAINER_AUTH]: undefined;
  [ROUTES.CLIENT_AUTH]: undefined;
  [ROUTES.MAIN]: undefined;
  [ROUTES.PLAN]: undefined;
  [ROUTES.WORKOUT]: undefined;
  [ROUTES.TRAINERS_LIST]: undefined;
  [ROUTES.TRAINER_NAV]: { screen: TRAINER_TABS };
  [ROUTES.CLIENT_NAV]: { screen: ROUTES };
  [TRAINER_TABS.CLIENT_PAGE]: {
    clientId: string;
  };
  [TRAINER_TABS.TRAINING_PLAN_CREATE]: undefined;
  [TRAINER_TABS.TRAINING_LIST]: undefined;
};

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ROUTES.REGISTRATION
>;

export enum CLIENT_TABS {
  HOME = 'Home',
  SETTINGS = 'Settings',
  PROFILE = 'Profile',
  CALENDAR = 'Calendar',
  WORKOUTS = 'Workouts',
  GOALS = 'Goals',
  CLUB = 'Club',
}

export enum TRAINER_TABS {
  HOME_TRAINER = 'HomeTrainer',
  CLIENTS_LIST = 'ClientsList',
  CLIENT_PAGE = 'ClientPage',
  TRAINING_PLANS = 'TrainingPlans',
  TRAINING_PLAN_CREATE = 'TrainingPlanCreate',
  TRAINING_LIST = 'TrainingList',
}
