import React from "react";
import styled from "styled-components";
import { TitleFilter } from "../../App";
import FormInput from "../../components/Forms/FormInput/FormInput";
import FormSubmit from "../../components/Forms/FormSubmit/FormSubmit";
import Textarea from "../../components/Forms/Textarea/Textarea";
import Header from "../../components/Header/Header";
import ScrollBtn from "../../components/ScrollBtn/ScrollBtn";
import { AuthContext } from "../../context/auth.context";
import { useHttp } from "../../hooks/http.hook";
import { changeInputs } from "../../store/ArticleSlice";
import { useAppDispatch, useAppSelector } from "../../store/Hooks";
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
  color: #4d3d3d;
  border-radius: 10px;
  border: 1px solid #4d3d3d;
  cursor: pointer;
`;

const Banner = styled.img`
  width: 100%;
`;

function AddArticle() {
  const dispatch = useAppDispatch();
  const inputsValue = useAppSelector((state) => state.article.inputsValue);
  const auth = React.useContext(AuthContext);
  const [banner, setBanner] = React.useState<undefined | File>(undefined);

  interface InputsErrors {
    value: string;
    msg: string;
    param: string;
    location: string;
  }

  const [inputsErrors, setInputsErrors] = React.useState<undefined | InputsErrors[]>(undefined);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeInputs({
        ...inputsValue,
        [event.target.name]: event.target.value,
      })
    );
  };

  const changeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) {
      setBanner(undefined);
      return;
    }

    setBanner(files[0]);
  };

  const formHandler = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    try {
      const title = inputsValue.title;
      const text = inputsValue.text;
      const tag = inputsValue.tag;

      const formData = new FormData();
      if (banner) {
        formData.append("banner", banner);
      }
      formData.append("title", title);
      formData.append("text", text);
      formData.append("tag", tag);

      await axios
        .post("/api/posts/newPost", formData, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .catch((err) => {
          const errors = err.response.data.errors;

          setInputsErrors(errors);
          dispatch(changeInputs({title: "", text: "", tag: ""}));
        });
    } catch (err) {
      console.log(err);
    }
  };

  let errorsMsg: {
    title: undefined | string;
    text: undefined | string;
  } = {
    title: undefined,
    text: undefined
  }

  if(inputsErrors) {
    inputsErrors.forEach((el: InputsErrors) => {
      switch(el.param) {
        case "title": 
          errorsMsg.title = el.msg;
          break;
        case "text": 
          errorsMsg.text = el.msg;
          break
      }
    });
  }

  return (
    <>
      <Header />
      <Form>
        <TitleFilter>Добавление статьи</TitleFilter>
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
          banner && <Banner src={URL.createObjectURL(banner)} alt="banner"/>
        }
        <FormInput
          className={(errorsMsg.title !== undefined && inputsValue.title.length === 0) ? "error" : ""}
          onChange={changeHandler}
          value={inputsValue.title}
          type="text"
          placeholder={errorsMsg.title === undefined ? "Название" : errorsMsg.title}
          name="title"
        />
        <Textarea
          className={(errorsMsg.text !== undefined && inputsValue.text.length === 0) ? "error" : ""}
          onChange={changeHandler}
          value={inputsValue.text}
          minHeight={"385px"}
          placeholder={errorsMsg.text === undefined ? "Текст" : errorsMsg.text}
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
      <ScrollBtn />
    </>
  );
}

export default AddArticle;
