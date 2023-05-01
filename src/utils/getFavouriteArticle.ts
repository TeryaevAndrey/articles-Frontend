import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { setFavouriteArticles } from "../store/slices/favouiriteArticlesSlice";

const getFavouriteArticle = async (articleId: string) => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;
  let result = false;

  await axios
    .get(import.meta.env.VITE_PROXY + `/get-favourite-article/${articleId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      result = true;
    })
    .catch((err) => {
      console.log(err.response.data.message);

      result = false;
    });

  return result;
};

export default getFavouriteArticle;
