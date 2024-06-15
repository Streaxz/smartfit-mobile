import { RootState } from '@/app/store';

export const selectTrainingPlans = (state: RootState) =>
  state.trainer.trainingPlans;

export const selectTrainingPlanCreate = (state: RootState) =>
  selectTrainingPlans(state).trainingPlanCreate;
