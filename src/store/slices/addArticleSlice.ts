import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IElement } from "../../types";

const initialState: {
  isOpenElements: boolean;
  title: string;
  banner: string | undefined;
  elements: IElement[];
  tags: string[];
} = {
  isOpenElements: false,
  title: "",
  banner: undefined,
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

    setBanner: (state, action: PayloadAction<string | undefined>) => {
      state.banner = action.payload;
    },

    setElements: (state, action: PayloadAction<IElement[]>) => {
      state.elements = action.payload;
    },

    setTags: (state, action: PayloadAction<string[]>) => {
      state.tags = action.payload;
    },
  },
});

export const { setIsOpenElements, setTitle, setBanner, setElements, setTags } =
  addArticleSlice.actions;
