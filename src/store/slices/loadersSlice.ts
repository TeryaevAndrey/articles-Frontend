import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  loadingProfileHeader: boolean;
} = {
  loadingProfileHeader: false,
};

export const loadersSlice = createSlice({
  name: "loaders",
  initialState,
  reducers: {
    setLoadingProfileHeader: (state, action: PayloadAction<boolean>) => {
      state.loadingProfileHeader = !state.loadingProfileHeader;
    },
  },
});

export const { setLoadingProfileHeader } = loadersSlice.actions;
