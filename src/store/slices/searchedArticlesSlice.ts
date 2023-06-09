import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../types";
import { RootState } from "../store";

const initialState: {
  articles: IArticle[];
  total: number;
} = {
  articles: [],
  total: 0,
};

export const searchedArticlesSlice = createSlice({
  name: "searchedArticles",
  initialState,
  reducers: {
    setSearchedArticles: (state, action: PayloadAction<IArticle[]>) => {
      state.articles = action.payload;
    },

    setSearchedArticlesTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
});

export const { setSearchedArticles, setSearchedArticlesTotal } =
  searchedArticlesSlice.actions;

export const searchedArticles = (state: RootState) => state.searchedArticles;
