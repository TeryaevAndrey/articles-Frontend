import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  isOpenElements: boolean;
  elements: string[];
  tags: string[];
} = {
  isOpenElements: false,
  elements: [],
  tags: [],
};

export const addArticleSlice = createSlice({
  name: "add-article",
  initialState,
  reducers: {
    setIsOpenElements: (state, action: PayloadAction<boolean>) => {
      state.isOpenElements = action.payload;
    },

    setElements: (state, action: PayloadAction<string[]>) => {
      state.elements = action.payload;
    },

    setTags: (state, action: PayloadAction<string[]>) => {
      state.tags = action.payload;
    },
  },
});

export const { setIsOpenElements, setElements, setTags } =
  addArticleSlice.actions;
