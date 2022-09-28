import React from 'react';
import styled from "styled-components";
import BackBtn from '../../components/Forms/BackBtn/BackBtn';
import FormInput from '../../components/Forms/FormInput/FormInput';
import FormSubmit from '../../components/Forms/FormSubmit/FormSubmit';

const AuthStyled = styled.div`
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

function Auth() {
  return (
    <AuthStyled>
      <BackBtn />
      <Title>Вход</Title>
      <Form>
        <FormInput type="email" placeholder="Email" />
        <FormInput type="password" placeholder="Пароль" />
        <FormSubmit type="submit" title="Войти" />
      </Form>
    </AuthStyled>
  );
}

export default Auth;