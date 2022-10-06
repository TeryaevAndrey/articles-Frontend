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

  interface Mistakes {
    name: string | undefined;
    email: string | undefined;
    password: string | undefined;
  }

  let mistakes: Mistakes = {
    name: undefined, 
    email: undefined, 
    password: undefined
  };

  inputsErrors.forEach((el) => {
    switch(el.param) {
      case "name": 
        mistakes.name = el.msg;
        break;
      case "email":
        mistakes.email = el.msg;
        break;
      case "password":
        mistakes.password = el.msg;
    };
  });

  const changeHandler = (event: any) => {
    const result = {
      ...inputsValue,
      [event.target.name]: event.target.value,
    };

    dispatch(changeInputs(result));
  };

  React.useEffect(() => {
    dispatch(changeMessage(error));
  }, [error, message]);

  const regHandler = async (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(changeMessage(""));
    
    try {
      if(inputsValue.password === inputsValue.passwordRepeat) {

        interface ReadyData {
          name: string;
          email: string;
          password: string;
        }

        const readyData: ReadyData = {
          name: inputsValue.name,
          email: inputsValue.email,
          password: inputsValue.password
        };

        const data = await request("/api/auth/reg", "POST", readyData);

        dispatch(changeMessage(data.message));
        
        mistakes = {
          name: undefined,
          email: undefined,
          password: undefined
        }
      }
    } catch(err: any) {
      const data = {
        name: "",
        email: "",
        password: "",
        passwordRepeat: ""
      };

      dispatch(changeInputs(data));
    }
  }

  return (
    <RegStyled>

      <Message text={message} />

      <BackBtn />
      <Title>Регистрация</Title>
      <Form>
        <FormInput
          className={mistakes.name !== undefined ? "error" : ""}
          onChange={changeHandler}
          value={inputsValue.name}
          type="text"
          placeholder="Имя пользователя"
          name="name"
        />
        <FormInput
          className={mistakes.email !== undefined ? "error": ""}
          onChange={changeHandler}
          value={inputsValue.email}
          type="email"
          placeholder="Email"
          name="email"
        />
        <FormInput
          className={mistakes.password !== undefined ? "error" : ""}
          onChange={changeHandler}
          value={inputsValue.password}
          type="password"
          placeholder="Пароль"
          name="password"
        />
        <FormInput
          className={mistakes.password !== undefined ? "error" : ""}
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
