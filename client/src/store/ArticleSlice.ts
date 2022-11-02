import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputsValue {
  title: string;
  text: string;
  tag: string;
}

interface InitialState {
  inputsValue: InputsValue;
}

const initialState: InitialState = {
  inputsValue: {
    title: "",
    text: "",
    tag: ""
  }
}

export const ArticleSlice = createSlice({
  name: "article", 
  initialState,
  reducers: {
    changeInputs(state, action: PayloadAction<InputsValue>) {
      state.inputsValue = action.payload;
    }
  }
});

export const {changeInputs} = ArticleSlice.actions;