import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";
import { RootState } from "../store";

const initialState: {
  myData: IUser;
} = {
  myData: {
    avatar: undefined,
    userName: undefined,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMyData: (state, action: PayloadAction<IUser>) => {
      state.myData = action.payload;
    },
  },
});

export const { setMyData } = userSlice.actions;

export const user = (state: RootState) => state.user;
