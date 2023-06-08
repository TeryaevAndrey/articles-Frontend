import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle, IFavourite } from "../../types";

const initialState: {
  articles: IFavourite[];
  total: number;
} = {
  articles: [],
  total: 0,
};

export const favouiriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    setFavourites: (state, action: PayloadAction<IFavourite[]>) => {
      state.articles = action.payload;
    },

    addArticleToFavourite: (state, action: PayloadAction<IFavourite>) => {
      state.articles = [...state.articles, action.payload];
    },

    deleteArticleFromFavourite: (state, action: PayloadAction<string>) => {
      state.articles = state.articles.filter((el) => {
        return el._id !== action.payload;
      });
    },

    setFavouritesTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
});

export const {
  setFavourites,
  addArticleToFavourite,
  deleteArticleFromFavourite,
  setFavouritesTotal,
} = favouiriteSlice.actions;
