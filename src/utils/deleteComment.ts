import { requests } from "@/core/requests";
import { setOpenedArticleComments } from "@/store/slices/openedArticleSlice";
import { IComment } from "@/types";
import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";

export const deleteComment = async (
  commentId: string,
  dispatch: Dispatch,
  comments: {
    total: number;
    commentsList: IComment[];
  }
) => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;

  await axios
    .delete(requests.deleteComment + `/${commentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res: AxiosResponse<{ message: string; commentId: string }>) => {
      const filteredComments = comments.commentsList.filter(
        (el) => el._id !== commentId
      );

      dispatch(
        setOpenedArticleComments({
          total: comments.total - 1,
          commentsList: filteredComments,
        })
      );

      alert(res.data.message);
    })
    .catch((err: AxiosError<{ message: string }>) => {
      alert(err.response?.data.message);
    });
};
