import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import {
  setMyArticles,
  setMyArticlesTotal,
  setPage,
} from "../store/slices/myArticlesSlice";

const getMyArticles =
  (limit: number, page: number) => async (dispatch: Dispatch) => {
    const token = JSON.parse(localStorage.getItem("user") || "{}").token;

    await axios
      .get(import.meta.env.VITE_PROXY + "/get-my-articles", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit,
          page,
        },
      })
      .then((res: AxiosResponse) => {
        dispatch(setMyArticles(res.data.articles));
        dispatch(setMyArticlesTotal(res.data.total));
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

export default getMyArticles;
