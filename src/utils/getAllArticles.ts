import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import {
  setAllArticles,
  setAllArticlesTotal,
} from "../store/slices/allArticlesSlice";

const getAllArticles =
  (limit: number, page: number) => async (dispatch: Dispatch) => {
    const searchParams = new URLSearchParams(window.location.search);
    const tag = searchParams.get("tag");

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
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

export default getAllArticles;
