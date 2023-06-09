import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IArticle } from "../../types";
import { RootState } from "../store";

const initialState: {
  articles: IArticle[];
  total: number;
} = {
  articles: [],
  total: 0,
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
  },
});

export const { setAllArticles, setAllArticlesTotal } = allArticlesSlice.actions;

export const allArticles = (state: RootState) => state.allArticles;
