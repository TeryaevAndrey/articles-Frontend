import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IElement {
  type: string;
  value?: string;
  src?: string | undefined;
}

const initialState: {
  isOpenElements: boolean;
  title: string;
  elements: IElement[];
  tags: string[];
} = {
  isOpenElements: false,
  title: "",
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

    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },

    setElements: (state, action: PayloadAction<IElement[]>) => {
      state.elements = action.payload;
    },

    setTags: (state, action: PayloadAction<string[]>) => {
      state.tags = action.payload;
    },
  },
});

export const { setIsOpenElements, setTitle, setElements, setTags } =
  addArticleSlice.actions;
