import { clientsInfoReducer } from '@/features/trainer/clientsInfo';
import { trainingPlansReducer } from '@/features/trainer/trainingPlans';
import { combineReducers } from 'redux';

export const trainerRootReducer = combineReducers({
  clientsInfo: clientsInfoReducer,
  trainingPlans: trainingPlansReducer,
});
