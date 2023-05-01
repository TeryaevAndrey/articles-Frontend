import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { setFavouriteArticles } from "../store/slices/favouiriteArticlesSlice";
import { IFavourite } from "../types";

const getFavouriteArticle = async (articleId: string) => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;
  let result: {
        favourite: IFavourite | undefined;
        result: boolean;
      } | undefined = undefined;

  await axios
    .get(import.meta.env.VITE_PROXY + `/get-favourite-article/${articleId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      result = {
        favourite: res.data.favourite,
        result: true
      };
    })
    .catch((err) => {
      result = {
        favourite: undefined, 
        result: false,
      };

      console.log(err.response.data.message);
    });

  return result;
};

export default getFavouriteArticle;
