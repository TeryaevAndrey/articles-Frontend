import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  loadingProfileHeader: boolean;
  loadingOpenedArticle: boolean;
} = {
  loadingProfileHeader: false,
  loadingOpenedArticle: false,
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
  },
});

export const { setLoadingProfileHeader, setLoadingOpenedArticle } =
  loadersSlice.actions;
