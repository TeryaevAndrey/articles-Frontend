import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment, IUser } from "../../types";

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
  comments: IComment[];
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
  comments: [],
};

export const openedArticleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setOpenedArticleData: (state, action: PayloadAction<IOpenedArticle>) => {
      state.article = action.payload;
    },

    setOpenedArticleComments: (state, action: PayloadAction<IComment[]>) => {
      state.comments = action.payload;
    },
  },
});

export const { setOpenedArticleData, setOpenedArticleComments } =
  openedArticleSlice.actions;
