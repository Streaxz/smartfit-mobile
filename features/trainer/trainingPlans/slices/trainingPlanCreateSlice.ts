import { TAiPlanType } from '@/types/trainings';
import { AI_SERVICE_API_HOST } from '@env';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type TState = {
  name?: string;
  additionalProperties?: string;
  aiData: {
    pending: boolean;
    response?: TAiPlanType;
    error: boolean;
    success: boolean;
  };
};

export const fetchTrainingPlan = createAsyncThunk(
  'trainingPlan/fetchTrainingPlan',
  async (data: { name: string; additionalProperties: string }) => {
    try {
      const response = await fetch(`${AI_SERVICE_API_HOST}execute-command`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          command: data.additionalProperties,
        }),
      });

      return (await response.json()) as TAiPlanType;
    } catch (e) {
      console.log('Ошибка при создании плана');
      console.error(JSON.parse(JSON.stringify(e)));
    }
  }
);

const initialState: TState = {
  name: undefined,
  additionalProperties: undefined,
  aiData: {
    pending: false,
    response: undefined,
    error: false,
    success: false,
  },
};

const trainingPlanCreateSlice = createSlice({
  name: 'trainingPlan/create',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrainingPlan.pending, (state, action) => {
        state.aiData.pending = true;
        state.name = action.meta.arg.name;
        state.additionalProperties = action.meta.arg.additionalProperties;
      })
      .addCase(fetchTrainingPlan.fulfilled, (state, action) => {
        state.aiData.pending = false;
        state.aiData.response = action.payload;
        state.aiData.error = false;
        state.aiData.success = true;
      })
      .addCase(fetchTrainingPlan.rejected, (state) => {
        state.aiData.error = true;
        state.aiData.success = false;
        state.aiData.pending = false;
      });
  },
});

export default trainingPlanCreateSlice.reducer;
