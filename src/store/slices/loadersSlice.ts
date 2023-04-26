import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  loadingProfileHeader: boolean;
  loadingOpenedArticle: boolean;
  loadingAddComment: boolean;
} = {
  loadingProfileHeader: false,
  loadingOpenedArticle: false,
  loadingAddComment: false,
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
  },
});

export const {
  setLoadingProfileHeader,
  setLoadingOpenedArticle,
  setLoadingAddComment,
} = loadersSlice.actions;
