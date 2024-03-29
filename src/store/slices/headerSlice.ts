import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: {
  isOpenMenu: boolean;
  searchValue: string;
} = {
  isOpenMenu: false,
  searchValue: "",
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setIsOpenMenu: (state, action: PayloadAction<boolean>) => {
      state.isOpenMenu = action.payload;
    },

    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setIsOpenMenu, setSearchValue } = headerSlice.actions;

export const header = (state: RootState) => state.header;
