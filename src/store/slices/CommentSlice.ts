import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  rating: number;
  text: string;
} = {
  rating: 0,
  text: "",
};

export const CommentSlice = createSlice({
  name: "comment",
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

export const { setRating, setText } = CommentSlice.actions;
