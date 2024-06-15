import { EPayloadStatus } from '@/types/api';
import { MyClientMock } from '@/utils/trainerMocks/my-client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {TTrainerClient} from "@/types/trainings";

type TState = {
  client: TTrainerClient | null;
  status: EPayloadStatus;
  error: string | null;
};

const initialState: TState = {
  client: null,
  status: EPayloadStatus.idle,
  error: null,
};

export const fetchTrainerClient = createAsyncThunk(
  'client/fetchClient',
  async (_: string) => {
    // clientId in params
    const promise: Promise<TTrainerClient> = new Promise((res) => {
      setTimeout(() => {
        res(MyClientMock);
      }, 475);
    });

    return await promise;
  }
);

const clientSlice = createSlice({
  name: 'trainer/clients/client-page',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrainerClient.pending, (state) => {
        state.status = EPayloadStatus.loading;
      })
      .addCase(fetchTrainerClient.fulfilled, (state, action) => {
        state.status = EPayloadStatus.succeeded;
        state.client = action.payload;
      })
      .addCase(fetchTrainerClient.rejected, (state, action) => {
        state.status = EPayloadStatus.failed;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default clientSlice.reducer;
