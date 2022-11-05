import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  message: string;
}

const initialState: InitialState = {
  message: "",
};

export const MainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changeMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const { changeMessage } = MainSlice.actions;
