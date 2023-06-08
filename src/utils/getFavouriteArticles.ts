import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setFavourites,
  setFavouritesTotal,
} from "../store/slices/favouriteSlice";

const getFavouritesArticles =
  (limit: number, page: number) =>
  async (dispatch: Dispatch): Promise<void> => {
    const token = JSON.parse(localStorage.getItem("user") || "{}").token;

    await axios
      .get(import.meta.env.VITE_PROXY + "/get-favourites-articles", {
        params: {
          limit,
          page,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setFavourites(res.data.favourite));
        dispatch(setFavouritesTotal(res.data.total));
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

export default getFavouritesArticles;
