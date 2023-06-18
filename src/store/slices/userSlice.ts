import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";
import { RootState } from "../store";

const initialState: {
  myData: IUser;
} = {
  myData: {
    _id: undefined,
    avatar: undefined,
    userName: undefined,
    createdAt: undefined,
    updatedAt: undefined,
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
