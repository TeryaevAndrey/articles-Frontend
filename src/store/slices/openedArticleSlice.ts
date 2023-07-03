import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment, IUser } from "../../types";
import { RootState } from "../store";

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
  comments: {
    total: number;
    comments: IComment[];
  };
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
  comments: {
    total: 0,
    comments: [],
  },
};

export const openedArticleSlice = createSlice({
  name: "openedArticle",
  initialState,
  reducers: {
    setOpenedArticleData: (state, action: PayloadAction<IOpenedArticle>) => {
      state.article = action.payload;
    },

    setOpenedArticleComments: (
      state,
      action: PayloadAction<{ total: number; comments: IComment[] }>
    ) => {
      state.comments = action.payload;
    },
  },
});

export const { setOpenedArticleData, setOpenedArticleComments } =
  openedArticleSlice.actions;

export const openedArticle = (state: RootState) => state.openedArticle;
