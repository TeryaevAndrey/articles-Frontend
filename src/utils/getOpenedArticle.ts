import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { setOpenedArticleData } from "../store/slices/openedArticleSlice";
import { setLoadingOpenedArticle } from "../store/slices/loadersSlice";

const getOpenedArticle = (articleId: string) => async (dispatch: Dispatch) => {
  dispatch(setLoadingOpenedArticle(true));

  await axios
    .get(import.meta.env.VITE_PROXY + `/get-article/${articleId}`)
    .then((res: AxiosResponse) => {
      dispatch(setOpenedArticleData(res.data.article));
    })
    .catch((err) => {
      alert(err.response.data.message);
    });

  dispatch(setLoadingOpenedArticle(false));
};

export default getOpenedArticle;