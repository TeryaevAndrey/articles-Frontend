import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { setOpenedArticleComments } from "../store/slices/openedArticleSlice";
import { setLoadingGetComments } from "../store/slices/loadersSlice";

export const getComments =
  (articleId: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(setLoadingGetComments(true));

    await axios
      .get(import.meta.env.VITE_PROXY + `/get-comments/${articleId}`)
      .then((res: AxiosResponse) => {
        dispatch(setOpenedArticleComments(res.data.comments));
      });

    dispatch(setLoadingGetComments(false));
  };
