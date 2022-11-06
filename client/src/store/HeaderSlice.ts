import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  openMenu: boolean;
}

const initialState: InitialState = {
  openMenu: false,
};

export const HeaderSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    openMenuReducer(state, action: PayloadAction<boolean>) {
      state.openMenu = action.payload;
    },
  },
});

export const { openMenuReducer } = HeaderSlice.actions;
