import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  username: string;
  password: string;
}

const initialState: IUser = {
  username: "",
  password: "",
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login(state, action: PayloadAction<IUser>) {
      state.password = action.payload.password;
      state.username = action.payload.username;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
