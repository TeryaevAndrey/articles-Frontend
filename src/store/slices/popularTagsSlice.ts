import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  tags: { _id: string }[];
} = {
  tags: [],
};

export const popularTagsSlice = createSlice({
  name: "popular-tags",
  initialState,
  reducers: {
    setPopularTags: (state, action: PayloadAction<{ _id: string }[]>) => {
      state.tags = action.payload;
    },
  },
});

export const { setPopularTags } = popularTagsSlice.actions;
