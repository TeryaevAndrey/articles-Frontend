import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../types";

const initialState: {
  articles: IArticle[];
} = {
  articles: [],
};

export const favouriteArticlesSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    setFavouriteArticles: (state, action: PayloadAction<IArticle[]>) => {
      state.articles = action.payload;
    },
  },
});

export const { setFavouriteArticles } = favouriteArticlesSlice.actions;
