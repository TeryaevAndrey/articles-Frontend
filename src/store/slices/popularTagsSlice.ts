import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: {
  tags: { _id: string }[];
} = {
  tags: [],
};

export const popularTagsSlice = createSlice({
  name: "popularTags",
  initialState,
  reducers: {
    setPopularTags: (state, action: PayloadAction<{ _id: string }[]>) => {
      state.tags = action.payload;
    },
  },
});

export const { setPopularTags } = popularTagsSlice.actions;

export const popularTags = (state: RootState) => state.popularTags;
