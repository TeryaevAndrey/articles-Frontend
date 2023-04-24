import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";

interface IOpenedArticle {
  _id: undefined | string;
  title: undefined | string;
  banner: undefined | string;
  elements: [];
  tags: [];
  views: undefined | number;
  from: undefined | IUser;
  createdAt: undefined | Date;
  updatedAt: undefined | Date;
}

const initialState: {
  article: IOpenedArticle;
} = {
  article: {
    _id: undefined,
    title: undefined,
    banner: undefined,
    elements: [],
    tags: [],
    views: undefined,
    from: undefined,
    createdAt: undefined,
    updatedAt: undefined,
  },
};

export const openedArticleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setOpenedArticleData: (state, action: PayloadAction<IOpenedArticle>) => {
      state.article = action.payload;
    },
  },
});

export const { setOpenedArticleData } = openedArticleSlice.actions;
