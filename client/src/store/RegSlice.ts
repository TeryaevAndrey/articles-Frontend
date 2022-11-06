import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputsValue {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

interface InitialState {
  inputsValue: InputsValue;
}

const initialState: InitialState = {
  inputsValue: {
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
  },
};

export const RegSlice = createSlice({
  name: "reg",
  initialState,
  reducers: {
    changeInputs(state, action: PayloadAction<InputsValue>) {
      state.inputsValue = action.payload;
    },
  },
});

export const { changeInputs } = RegSlice.actions;
