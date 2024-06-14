import { RootState } from '@/app/store';

export const trainerClientSelector = (state: RootState) =>
  state.trainer.clientsInfo.clientPage;
