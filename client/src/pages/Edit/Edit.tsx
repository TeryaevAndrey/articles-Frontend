import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { TitleFilter } from '../../App';
import FormInput from '../../components/Forms/FormInput/FormInput';
import FormSubmit from '../../components/Forms/FormSubmit/FormSubmit';
import Textarea from '../../components/Forms/Textarea/Textarea';
import Header from '../../components/Header/Header';
import { useAuth } from '../../hooks/auth.hook';
import { changeBanner, changeInputs } from '../../store/EditSlice';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import { Banner, Input, Label, Wrapper } from '../AddArticle/AddArticle';


const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 705px;
  margin: 0 auto;
  gap: 20px;
`;



function Edit() {
  const [post, setPost] = React.useState<any>([]);
  const [banner, setBanner] = React.useState<undefined | File | string>(undefined);
  const inputsValue = useAppSelector((state) => state.edit.inputsValue);
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const auth = useAuth();

  React.useEffect(() => {
    axios.get(`/api/posts/${id}`).then((res) => setPost(res.data));
  }, []);

  const changeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) {
      setBanner(undefined);
      return;
    }

    setBanner(files[0]);
  };

  React.useEffect(() => {
    setBanner(post.banner);
    dispatch(changeInputs({
      title: post.title,
      text: post.text,
      tag: post.tag
    })); 
  }, [post]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeInputs({
        ...inputsValue,
        [event.target.name]: event.target.value,
      })
    );
  };

  const formHandler = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      if (banner) {
        formData.append("banner", banner);
      }

      formData.append("title", inputsValue.title);
      formData.append("text", inputsValue.text);
      formData.append("tag", inputsValue.tag.toLowerCase());

      await axios
        .patch(`/api/posts/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => alert(res.data.message))
        .catch((err) => {
          alert(err.response.data.message);
          dispatch(changeBanner(undefined));
          dispatch(changeInputs({title: "", text: "", tag: ""}));
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <Form>
        <TitleFilter>Редактирование поста</TitleFilter>
        <Wrapper>
          <Input
            onChange={changeFile}
            name="banner"
            type="file"
            id="downloadBanner"
          />
          <Label htmlFor="downloadBanner">Загрузить баннер</Label>
        </Wrapper>
        {
          banner && <Banner src={(typeof banner !== "string") ? URL.createObjectURL((banner)) : `http://localhost:3000/${banner}`} alt="banner"/>
        }
        <FormInput
          onChange={changeHandler}
          value={inputsValue.title}
          type="text"
          placeholder="Название"
          name="title"
        />
        <Textarea
          onChange={changeHandler}
          value={inputsValue.text}
          minHeight={"385px"}
          placeholder="Текст"
          name="text"
        />
        <FormInput
          onChange={changeHandler}
          value={inputsValue.tag}
          type="text"
          placeholder={"Тег (необязательно). Ввести только одно слово."}
          name="tag"
        />
        <FormSubmit onClick={formHandler} type="submit" title="Сохранить" />
      </Form>
    </>
  );
}

export default Edit;