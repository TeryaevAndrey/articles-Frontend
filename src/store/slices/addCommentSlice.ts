import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: {
  rating: number;
  text: string;
} = {
  rating: 0,
  text: "",
};

export const addCommentSlice = createSlice({
  name: "addComment",
  initialState,
  reducers: {
    setRating: (state, action: PayloadAction<number>) => {
      state.rating = action.payload;
    },
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { setRating, setText } = addCommentSlice.actions;

export const addComment = (state: RootState) => state.addComment;
