import React from 'react';
import styled from "styled-components";
import { TitleFilter } from '../../App';
import AddImg from '../../components/Forms/AddImg/AddImg';
import FormInput from '../../components/Forms/FormInput/FormInput';
import FormSubmit from '../../components/Forms/FormSubmit/FormSubmit';
import Textarea from '../../components/Forms/Textarea/Textarea';
import Header from '../../components/Header/Header';
import ScrollBtn from '../../components/ScrollBtn/ScrollBtn';
import { AuthContext } from '../../context/auth.context';
import { useHttp } from '../../hooks/http.hook';
import { changeInputs } from '../../store/Article';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;
  max-width: 705px;
  padding-bottom: 50px;
`;

function AddArticle() {
  const dispatch = useAppDispatch();
  const inputsValue = useAppSelector(state => state.article.inputsValue);
  const {request} = useHttp();
  const auth = React.useContext(AuthContext);

  const changeHandler = (event: any) => {
    dispatch(changeInputs({
      ...inputsValue, 
      [event.target.name]: event.target.value
    }));
  }

  const formHandler = async(event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    try {
      interface FormData {
        banner: string;
        title: string;
        text: string;
      }
  
      const readyData: FormData = {
        banner: "",
        title: inputsValue.title,
        text: inputsValue.text
      }
  
       request("/api/posts/newPost", "POST", readyData, {
        Authorization: `Bearer ${auth.token}`
      });
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header />
      <Form>
        <TitleFilter>Добавление статьи</TitleFilter>
        <AddImg />
        <FormInput onChange={changeHandler} value={inputsValue.title} type="text" placeholder="Название" name="title" />
        <Textarea onChange={changeHandler} value={inputsValue.text} minHeight={"385px"} placeholder="Текст" name="text" />
        <FormSubmit onClick={formHandler} type="submit" title="Сохранить" />
      </Form>
      <ScrollBtn />
    </>
  );
}

export default AddArticle;