import { combineReducers } from 'redux';

import trainingPlanCreateReducer from './slices/trainingPlanCreateSlice';

export const trainingPlansReducer = combineReducers({
  trainingPlanCreate: trainingPlanCreateReducer,
});
