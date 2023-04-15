import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
