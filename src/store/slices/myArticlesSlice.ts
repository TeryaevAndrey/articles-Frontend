import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../types";

const initialState: {
  myArticles: IArticle[];
  total: number;
  limit: number;
  page: number;
} = {
  myArticles: [],
  total: 0,
  limit: 10,
  page: 1,
};

export const myArticlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setMyArticles: (state, action: PayloadAction<IArticle[]>) => {
      state.myArticles = action.payload;
    },

    setMyArticlesTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },

    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },

    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setMyArticles, setMyArticlesTotal, setLimit, setPage } =
  myArticlesSlice.actions;
