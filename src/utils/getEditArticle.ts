import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { setEditArticle } from "../store/slices/editArticleSlice";

const getEditArticle =
  (articleId: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    await axios
      .get(import.meta.env.VITE_PROXY + `/get-article/${articleId}`)
      .then((res: AxiosResponse) => {
        dispatch(setEditArticle(res.data.article));
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

export default getEditArticle;
