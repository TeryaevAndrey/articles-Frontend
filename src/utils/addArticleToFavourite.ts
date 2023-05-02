import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { addArticleToFavourite } from "../store/slices/favouriteSlice";

const addToFavourite = (articleId: string) => async (dispatch: Dispatch) => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;

  await axios
    .post(
      import.meta.env.VITE_PROXY + "/add-to-favourite",
      { articleId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res: AxiosResponse) => {
      dispatch(addArticleToFavourite(res.data.article));
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export default addToFavourite;
