import React from "react";
import styled from "styled-components";
import BackBtn from "../../components/Forms/BackBtn/BackBtn";
import FormInput from "../../components/Forms/FormInput/FormInput";
import FormSubmit from "../../components/Forms/FormSubmit/FormSubmit";
import { useAppDispatch, useAppSelector } from "../../store/Hooks";
import { changeInputs } from "../../store/RegSlice";
import {useHttp} from "../../hooks/http.hook";
import Message from "../../components/Message/Message";
import { changeMessage } from "../../store/MainSlice";

const RegStyled = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 590px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: 600;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  margin-top: 45px;
`;

function Reg() {
  const {request, error, loading, inputsErrors} = useHttp();
  const dispatch = useAppDispatch();
  const inputsValue = useAppSelector((state) => state.reg.inputsValue);
  const message = useAppSelector((state) => state.main.message);

  const changeHandler = (event: any) => {
    const result = {
      ...inputsValue,
      [event.target.name]: event.target.value,
    };

    dispatch(changeInputs(result));
  };

  React.useEffect(() => {
    dispatch(changeMessage(error));
  }, [error]);

  const regHandler = async (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(changeMessage(""));
    
    try {


        interface ReadyData {
          name: string;
          email: string;
          password: string;
          passwordRepeat: string;
        }

        const readyData: ReadyData = {
          name: inputsValue.name,
          email: inputsValue.email,
          password: inputsValue.password,
          passwordRepeat: inputsValue.passwordRepeat
        };

        const data = await request("/api/auth/reg", "POST", readyData);
        dispatch(changeMessage(data.message));
      
    } catch(err: any) {
      dispatch(changeMessage(err.message));

      dispatch(changeInputs({
        name: "",
        email: "",
        password: "",
        passwordRepeat: ""
      }));
    }
  }

  interface InputsErrors {
    name: string | undefined;
    email: string | undefined;
    password: string | undefined;
  }

  let errors: InputsErrors = {
    name: undefined,
    email: undefined,
    password: undefined,
  };

  inputsErrors.forEach((el) => {
    switch(el.param) {
      case "name":
        errors.name = el.msg;
        break;
      case "email":
        errors.email = el.msg;
        break;
      case "password":
        errors.password = el.msg;
        break;
    };
  });

  return (
    <RegStyled>

      <Message text={message} />

      <BackBtn />
      <Title>Регистрация</Title>
      <Form>
        <FormInput
          className={(errors.name !== undefined && inputsValue.name.length === 0) ? "error" : ""}
          onChange={changeHandler}
          value={inputsValue.name}
          type="text"
          placeholder={errors.name === undefined ? "Имя пользователя" : errors.name}
          name="name"
        />
        <FormInput
          className={(errors.email !== undefined && inputsValue.email.length === 0) ? "error" : ""}
          onChange={changeHandler}
          value={inputsValue.email}
          type="email"
          placeholder={errors.email === undefined ? "Email" : errors.email}
          name="email"
        />
        <FormInput
          className={(errors.password !== undefined && inputsValue.password.length === 0) ? "error" : ""}
          onChange={changeHandler}
          value={inputsValue.password}
          type="password"
          placeholder={errors.password === undefined ? "Пароль" : errors.password}
          name="password"
        />
        <FormInput
          className={(errors.password !== undefined && inputsValue.password.length === 0) ? "error" : ""}
          onChange={changeHandler}
          value={inputsValue.passwordRepeat}
          type="password"
          placeholder="Повтор пароля"
          name="passwordRepeat"
        />
        <FormSubmit disabled={loading} onClick={regHandler} type="submit" title="Зарегистрироваться" />
      </Form>
    </RegStyled>
  );
}

export default Reg;
