import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { addArticleToFavourite } from "../store/slices/favouritesSlice";

const addToFavourite =
  (articleId: string) =>
  async (
    dispatch: Dispatch
  ): Promise<{ message: string; result: boolean } | undefined> => {
    const token = JSON.parse(localStorage.getItem("user") || "{}").token;
    let result: { message: string; result: boolean } | undefined = undefined;

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
        result = {
          message: res.data.message,
          result: true,
        };

        dispatch(addArticleToFavourite(res.data.article));
      })
      .catch((err) => {
        result = {
          message: err.response.data.message,
          result: true,
        };

        alert(err.response.data.message);
      });

    return result;
  };

export default addToFavourite;
