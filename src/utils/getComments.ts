import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { setOpenedArticleComments } from "../store/slices/openedArticleSlice";
import { setLoadingGetComments } from "../store/slices/loadersSlice";
import { IComment } from "@/types";

export const getComments =
  (articleId: string, limit: number, page: number, comments: IComment[]) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(setLoadingGetComments(true));

    await axios
      .get(import.meta.env.VITE_PROXY + `/get-comments/${articleId}`, {
        params: {
          limit,
          page,
        },
      })
      .then((res: AxiosResponse<{ total: number; comments: IComment[] }>) => {
        dispatch(
          setOpenedArticleComments({
            total: res.data.total,
            comments: [...comments, ...res.data.comments],
          })
        );
      });

    dispatch(setLoadingGetComments(false));
  };
