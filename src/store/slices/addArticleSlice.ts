import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IElement {
  type: string;
  value?: string;
  src?: string | undefined;
}

const initialState: {
  isOpenElements: boolean;
  elements: IElement[];
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

    setElements: (state, action: PayloadAction<IElement[]>) => {
      state.elements = action.payload;
    },

    setTags: (state, action: PayloadAction<string[]>) => {
      state.tags = action.payload;
    },
  },
});

export const { setIsOpenElements, setElements, setTags } =
  addArticleSlice.actions;
