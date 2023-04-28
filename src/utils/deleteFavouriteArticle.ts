import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { deleteArticleFromFavourite } from "../store/slices/favouiriteArticlesSlice";

const deleteFavouriteArticle =
  (favouriteId: string) => async (dispatch: Dispatch) => {
    const token = JSON.parse(localStorage.getItem("user") || "{}").token;

    await axios
      .post(
        import.meta.env.VITE_PROXY + "/delete-from-favourite",
        { _id: favouriteId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res: AxiosResponse) => {
        dispatch(deleteArticleFromFavourite(favouriteId));
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

export default deleteFavouriteArticle;
