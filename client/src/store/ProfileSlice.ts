import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  openMenu: boolean;
}

const initialState: InitialState = {
  openMenu: false,
}

const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    openMenuReducer(state, action: PayloadAction<boolean>) {
      state.openMenu = action.payload;
    }
  }
});

export const {openMenuReducer} = ProfileSlice.actions;