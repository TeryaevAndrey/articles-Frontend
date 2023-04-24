import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IOpenedArticle {
  _id: undefined | string;
  title: undefined | string;
  banner: undefined | string;
  elements: [];
  tags: [];
  views: undefined | number;
  from: undefined | string;
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
    setArticleData: (state, action: PayloadAction<IOpenedArticle>) => {
      state.article = action.payload;
    },
  },
});

export const { setArticleData } = openedArticleSlice.actions;
