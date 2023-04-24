import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../types";

const initialState: {
  articles: IArticle[];
  total: number;
  limit: number;
  page: number;
  currentPage: number;
} = {
  articles: [],
  total: 0,
  limit: 10,
  page: 1,
  currentPage: 1,
};

export const myArticlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setMyArticles: (state, action: PayloadAction<IArticle[]>) => {
      state.articles = action.payload;
    },

    setMyArticlesTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },

    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setMyArticles, setMyArticlesTotal, setPage, setCurrentPage } =
  myArticlesSlice.actions;
