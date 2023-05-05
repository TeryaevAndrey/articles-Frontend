import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IArticle, IElement } from "../../types";

const initialState: {
  isOpenElements: boolean;
  article: IArticle | undefined;
  title: string;
  banner: string | undefined;
  elements: IElement[];
  tags: string[];
} = {
  isOpenElements: false,
  article: undefined,
  title: "",
  banner: undefined,
  elements: [],
  tags: [],
};

export const editArticleSlice = createSlice({
  name: "edit-article",
  initialState,
  reducers: {
    setEditArticle: (state, action: PayloadAction<IArticle>) => {
      state.article = action.payload;
    },
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

export const {
  setEditArticle,
  setIsOpenElements,
  setTitle,
  setBanner,
  setElements,
  setTags,
} = editArticleSlice.actions;
