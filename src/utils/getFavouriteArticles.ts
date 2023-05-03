import axios from "axios";
import { IFavourite } from "../types";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setFavourite,
  setFavouriteTotal,
} from "../store/slices/favouriteSlice";

const getFavouriteArticles =
  (limit: number, page: number) => async (dispatch: Dispatch) => {
    const token = JSON.parse(localStorage.getItem("user") || "{}").token;

    await axios
      .get(import.meta.env.VITE_PROXY + "/get-favourite-articles", {
        params: {
          limit,
          page,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setFavourite(res.data.favourite));
        dispatch(setFavouriteTotal(res.data.total));
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

export default getFavouriteArticles;
