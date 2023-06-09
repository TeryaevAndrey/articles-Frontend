import { requests } from "@/core/requests";
import {
  setFavourites,
  setFavouritesTotal,
} from "@/store/slices/favouritesSlice";
import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export const getAllFavouritesArticles = async (dispatch: Dispatch) => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;

  await axios
    .get(import.meta.env.VITE_PROXY + "/get-all-favourites-articles", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res: AxiosResponse) => {
      const total = res.data.total;
      const favourites = res.data.favourites;

      if (total > 0) {
        dispatch(setFavourites(favourites));
        dispatch(setFavouritesTotal(total));
      }
    });
};
