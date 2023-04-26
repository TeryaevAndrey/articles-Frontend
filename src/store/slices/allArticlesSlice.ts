import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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

export const allArticlesSlice = createSlice({
  name: "allArticles",
  initialState,
  reducers: {
    setAllArticles: (state, action: PayloadAction<IArticle[]>) => {
      state.articles = action.payload;
    },

    setAllArticlesTotal: (state, action: PayloadAction<number>) => {
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

export const { setAllArticles, setAllArticlesTotal, setPage, setCurrentPage } =
  allArticlesSlice.actions;
