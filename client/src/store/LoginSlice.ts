import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputsValue {
  name: string;
  password: string;
}

interface InitialState {
  inputsValue: InputsValue
}

const initialState: InitialState = {
  inputsValue: {
    name: "",
    password: ""
  }
}

export const LoginSlice = createSlice({
  name: "login",
  initialState, 
  reducers: {
    changeInputs(state, action: PayloadAction<InputsValue>) {
      state.inputsValue = action.payload;
    }
  }
});

export const {changeInputs} = LoginSlice.actions;

