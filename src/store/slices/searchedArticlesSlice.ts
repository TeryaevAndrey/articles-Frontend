import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../types";

const initialState: {
  articles: IArticle[];
  total: number;
} = {
  articles: [],
  total: 0,
};

export const searchedArticlesSlice = createSlice({
  name: "searched-articles",
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
