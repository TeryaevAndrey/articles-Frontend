import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { setSearchedArticles, setSearchedArticlesTotal } from "../store/slices/searchedArticlesSlice";

const getSearchedArticles = (limit: number, page: number) => async (dispatch: Dispatch) => {
  const searchParams = new URLSearchParams(window.location.search);
  const q = searchParams.get("q");
  
  console.log(q);

  await axios.get(import.meta.env.VITE_PROXY + "/get-articles-by-search", {
    params: {
      limit,
      page,
      q
    }
  }).then((res: AxiosResponse) => {
    dispatch(setSearchedArticles(res.data.articles));
    dispatch(setSearchedArticlesTotal(res.data.total));
  }).catch((err) => {
    console.log(err.response.data.message);
  })
}

export default getSearchedArticles;