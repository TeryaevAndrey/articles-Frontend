import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { setFavouriteArticles } from "../store/slices/favouiriteArticlesSlice";

const getFavouriteArticles = async (dispatch: Dispatch) => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;

  await axios
    .get(import.meta.env.VITE_PROXY + "/get-my-favourite-articles", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(setFavouriteArticles(res.data.articles));
    })
    .catch((err) => {
      console.log(err.response.data.message);
    });
};

export default getFavouriteArticles;
