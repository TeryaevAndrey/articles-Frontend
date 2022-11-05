import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchValue {
  searchValue: string;
}

const initialState: SearchValue = {
  searchValue: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { changeValue } = searchSlice.actions;
