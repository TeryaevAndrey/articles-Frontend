import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import {
  setAllArticles,
  setAllArticlesTotal,
} from "../store/slices/allArticlesSlice";

const getAllArticles =
  (limit: number, page: number) => async (dispatch: Dispatch) => {
    await axios
      .get(import.meta.env.VITE_PROXY + "/get-articles", {
        params: {
          limit,
          page,
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
