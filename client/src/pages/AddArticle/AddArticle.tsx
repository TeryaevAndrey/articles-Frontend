import React from 'react';
import styled from "styled-components";
import { TitleFilter } from '../../App';
import FormInput from "../../components/Forms/FormInput/FormInput";
import FormSubmit from '../../components/Forms/FormSubmit/FormSubmit';
import Textarea from '../../components/Forms/Textarea/Textarea';
import Header from '../../components/Header/Header';
import ScrollBtn from '../../components/ScrollBtn/ScrollBtn';
import { AuthContext } from '../../context/auth.context';
import { useHttp } from '../../hooks/http.hook';
import { changeInputs } from '../../store/Article';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import axios from "axios";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;
  max-width: 705px;
  padding-bottom: 50px;
`;

const Wrapper = styled.div`
  width: 350px;
  position: relative;
`;

const Input = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 50px;
  background-color: #fff;
  color: #4D3D3D;
  border-radius: 10px;
  border: 1px solid #4D3D3D;
  cursor: pointer;
`;

function AddArticle() {
  const dispatch = useAppDispatch();
  const inputsValue = useAppSelector(state => state.article.inputsValue);
  const {request} = useHttp();
  const auth = React.useContext(AuthContext);
  const [banner, setBanner] = React.useState<undefined | File>(undefined);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInputs({
      ...inputsValue,
      [event.target.name]: event.target.value
    }));
  }

  const changeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if(!files) {
          setBanner(undefined);
          return;
      }

      setBanner(files[0]);
  }

  const formHandler = async(event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    try {
      const title = inputsValue.title;
      const text = inputsValue.text;

      const formData = new FormData();
      if(banner) {
        formData.append("banner", banner);
      }
      formData.append("title", title);
      formData.append("text", text);
      
      await axios.post("/api/posts/newPost", formData, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
          "Content-Type": "multipart/form-data"
        }
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
        <Wrapper>
      <Input onChange={changeFile} name="banner" type="file" id="downloadBanner" />
      <Label htmlFor="downloadBanner">Загрузить баннер</Label>
    </Wrapper>
        <FormInput onChange={changeHandler} value={inputsValue.title} type="text" placeholder="Название" name="title" />
        <Textarea onChange={changeHandler} value={inputsValue.text} minHeight={"385px"} placeholder="Текст" name="text" />
        <FormSubmit onClick={formHandler} type="submit" title="Сохранить" />
      </Form>
      <ScrollBtn />
    </>
  );
}

export default AddArticle;
