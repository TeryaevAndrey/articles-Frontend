import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: {
  loadingProfileHeader: boolean;
  loadingOpenedArticle: boolean;
  loadingAddComment: boolean;
  loadingGetComments: boolean;
} = {
  loadingProfileHeader: false,
  loadingOpenedArticle: false,
  loadingAddComment: false,
  loadingGetComments: false,
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
  },
});

export const {
  setLoadingProfileHeader,
  setLoadingOpenedArticle,
  setLoadingAddComment,
  setLoadingGetComments,
} = loadersSlice.actions;

export const loaders = (state: RootState) => state.loaders;
