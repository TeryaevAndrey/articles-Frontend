import { requests } from "@/core/requests";
import { myArticles, setMyArticles } from "@/store/slices/myArticlesSlice";
import { useAppSelector } from "@/store/store";
import { IArticle } from "@/types";
import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";

export const deleteArticle = async (
  articleId: string,
  dispatch: Dispatch,
  articles: IArticle[]
) => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;

  await axios
    .delete(requests.deleteArticle + `/${articleId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res: AxiosResponse<{ message: string }>) => {
      const filteredArticles = articles.filter((el) => el._id !== articleId);

      dispatch(setMyArticles(filteredArticles));

      alert(res.data.message);
    })
    .catch((err: AxiosError<{ message: string }>) => {
      alert(err.response?.data.message);
    });
};
