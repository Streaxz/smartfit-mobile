import { clientsInfoReducer } from '@/features/trainer/clientsInfo';
import { combineReducers } from 'redux';

export const trainerRootReducer = combineReducers({
  clientsInfo: clientsInfoReducer,
});
