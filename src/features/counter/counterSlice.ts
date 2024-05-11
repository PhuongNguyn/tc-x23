import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICounterState {
  value: number;
  loading: boolean;
}

const initialState: ICounterState = {
  value: 0,
  loading: false,
};

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
});

export const { incrementByOne, icrement } = counterSlice.actions;

export default counterSlice.reducer;
