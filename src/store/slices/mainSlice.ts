import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: {
  isAuth: boolean;
} = {
  isAuth: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setIsAuth } = mainSlice.actions;

export const main = (state: RootState) => state.main;
