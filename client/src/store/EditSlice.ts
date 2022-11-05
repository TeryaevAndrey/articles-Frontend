import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputsValue {
  title: string;
  text: string;
  tag: string;
}

interface InitialState {
  banner: File | undefined;
  inputsValue: InputsValue;
}

const initialState: InitialState = {
  banner: undefined,
  inputsValue: {
    title: "",
    text: "",
    tag: ""
  }
}

export const EditSlice = createSlice({
  name: "edit", 
  initialState,
  reducers: {
    changeBanner(state, action: PayloadAction<File | undefined>) {
      state.banner = action.payload;
    },
    changeInputs(state, action: PayloadAction<InputsValue>) {
      state.inputsValue = action.payload;
    }
  }
});

export const {changeBanner, changeInputs} = EditSlice.actions;