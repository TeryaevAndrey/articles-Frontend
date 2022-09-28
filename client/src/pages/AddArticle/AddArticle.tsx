import React from 'react';
import styled from "styled-components";
import { TitleFilter } from '../../App';
import AddImg from '../../components/Forms/AddImg/AddImg';
import FormInput from '../../components/Forms/FormInput/FormInput';
import FormSubmit from '../../components/Forms/FormSubmit/FormSubmit';
import Textarea from '../../components/Forms/Textarea/Textarea';
import Header from '../../components/Header/Header';
import ScrollBtn from '../../components/ScrollBtn/ScrollBtn';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;
  max-width: 705px;
`;

function AddArticle() {
  return (
    <>
      <Header />
      <Form>
        <TitleFilter>Добавление статьи</TitleFilter>
        <AddImg />
        <FormInput type="text" placeholder="Название" />
        <Textarea minHeight={"385px"} placeholder="Текст" />
        <FormSubmit type="submit" title="Сохранить" />
      </Form>
      <ScrollBtn />
    </>
  );
}

export default AddArticle;