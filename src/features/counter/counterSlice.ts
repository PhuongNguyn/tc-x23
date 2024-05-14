import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { GetState, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../app/store";
import { RootState } from "../../app/store";

export interface ICounterState {
  value: number;
  loading: boolean;
}

const initialState: ICounterState = {
  value: 0,
  loading: false,
};

export const incrementByNumber = createAsyncThunk<
  number,
  string,
  {
    dispatch: AppDispatch;
    getState: GetState<RootState>;
  }
>("counter/inCrementByNumber", async (params, thunkApi) => {
  thunkApi.dispatch(incrementByOne());
  return true;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByOne(state) {
      state.value = state.value + 1;
    },
    icrement(state, action: PayloadAction<number>) {
      state.value = state.value + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByNumber.fulfilled, (state, action) => {});
    builder.addCase(incrementByNumber.rejected, (state, action) => {});
    builder.addCase(incrementByNumber.pending, (state, action) => {});
  },
});

export const { incrementByOne, icrement } = counterSlice.actions;

export default counterSlice.reducer;
