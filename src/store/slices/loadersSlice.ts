import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: {
  loadingProfileHeader: boolean;
  loadingOpenedArticle: boolean;
  loadingAddComment: boolean;
  loadingGetComments: boolean;
  loadingArticlesMainPage: boolean;
  loadingPopularTags: boolean;
} = {
  loadingProfileHeader: false,
  loadingOpenedArticle: false,
  loadingAddComment: false,
  loadingGetComments: false,
  loadingArticlesMainPage: false,
  loadingPopularTags: false,
};

export const loadersSlice = createSlice({
  name: "loaders",
  initialState,
  reducers: {
    setLoadingProfileHeader: (state, action: PayloadAction<boolean>) => {
      state.loadingProfileHeader = !state.loadingProfileHeader;
    },

    setLoadingOpenedArticle: (state, action: PayloadAction<boolean>) => {
      state.loadingOpenedArticle = !state.loadingOpenedArticle;
    },

    setLoadingAddComment: (state, action: PayloadAction<boolean>) => {
      state.loadingAddComment = !state.loadingAddComment;
    },

    setLoadingGetComments: (state, action: PayloadAction<boolean>) => {
      state.loadingGetComments = !state.loadingGetComments;
    },

    setLoadingArticlesMainPage: (state, action: PayloadAction<boolean>) => {
      state.loadingArticlesMainPage = action.payload;
    },

    setLoadingPopularTags: (state, action: PayloadAction<boolean>) => {
      state.loadingPopularTags = action.payload;
    },
  },
});

export const {
  setLoadingProfileHeader,
  setLoadingOpenedArticle,
  setLoadingAddComment,
  setLoadingGetComments,
  setLoadingArticlesMainPage,
  setLoadingPopularTags,
} = loadersSlice.actions;

export const loaders = (state: RootState) => state.loaders;
