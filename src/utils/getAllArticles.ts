import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import {
  setAllArticles,
  setAllArticlesTotal,
} from "../store/slices/allArticlesSlice";
import { setLoadingArticlesMainPage } from "@/store/slices/loadersSlice";

export const getAllArticles =
  (limit: number, page: number) =>
  async (dispatch: Dispatch): Promise<void> => {
    const searchParams = new URLSearchParams(window.location.search);
    const tag = searchParams.get("tag");

    dispatch(setLoadingArticlesMainPage(true));

    await axios
      .get(import.meta.env.VITE_PROXY + "/get-articles", {
        params: {
          limit,
          page,
          tag,
        },
      })
      .then((res: AxiosResponse) => {
        dispatch(setAllArticles(res.data.articles));
        dispatch(setAllArticlesTotal(res.data.total));
        dispatch(setLoadingArticlesMainPage(false));
      })
      .catch((err) => {
        dispatch(setLoadingArticlesMainPage(false));

        alert(err.response.data.message);
      });
  };
