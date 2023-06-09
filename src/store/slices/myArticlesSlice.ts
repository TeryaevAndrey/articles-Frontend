import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../types";
import { RootState } from "../store";

const initialState: {
  articles: IArticle[];
  total: number;
} = {
  articles: [],
  total: 0,
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
  },
});

export const { setMyArticles, setMyArticlesTotal } = myArticlesSlice.actions;

export const myArticles = (state: RootState) => state.myArticles;
