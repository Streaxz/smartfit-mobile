import { combineReducers } from 'redux';

import clientPageReducer from './slices/clientSlice';

export const clientsInfoReducer = combineReducers({
  clientPage: clientPageReducer,
});
