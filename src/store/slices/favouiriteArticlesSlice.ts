import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../types";

const initialState: {
  articles: IArticle[];
  total: number;
} = {
  articles: [],
  total: 0,
};

export const favouiriteArticlesSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    setFavouriteArticles: (state, action: PayloadAction<IArticle[]>) => {
      state.articles = action.payload;
    },

    addArticleToFavourite: (state, action: PayloadAction<IArticle>) => {
      state.articles = [...state.articles, action.payload];
    },

    deleteArticleFromFavourite: (state, action: PayloadAction<string>) => {
      state.articles = state.articles.filter((el) => {
        return el._id !== action.payload;
      });
    },

    setFavouriteTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
});

export const {
  setFavouriteArticles,
  addArticleToFavourite,
  deleteArticleFromFavourite,
  setFavouriteTotal,
} = favouiriteArticlesSlice.actions;
