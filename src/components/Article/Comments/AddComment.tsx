import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { setRating, setText } from "../../../store/slices/addCommentSlice";
import { useLocation } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { setLoadingAddComment } from "../../../store/slices/loadersSlice";
import { setOpenedArticleComments } from "../../../store/slices/openedArticleSlice";
import { Rating, Loader } from "@/components";

export const AddComment: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const article = useAppSelector((state) => state.openedArticle.article);
  const rating = useAppSelector((state) => state.comment.rating);
  const text = useAppSelector((state) => state.comment.text);
  const loading = useAppSelector((state) => state.loaders.loadingAddComment);
  const comments = useAppSelector((state) => state.openedArticle.comments);
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;

  useEffect(() => {
    dispatch(setText(""));
  }, [location]);

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    dispatch(setText(e.target.value));
  };

  const formHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    dispatch(setLoadingAddComment(true));

    await axios
      .post(
        import.meta.env.VITE_PROXY + "/add-comment",
        {
          articleId: article._id,
          rating,
          text,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res: AxiosResponse) => {
        alert(res.data.message);

        dispatch(setOpenedArticleComments([res.data.comment, ...comments]));
        console.log(res.data.comments);

        dispatch(setRating(0));
        dispatch(setText(""));
      })
      .catch((err) => {
        alert(err.response.data.message);
      });

    dispatch(setLoadingAddComment(false));
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={formHandler}>
      <Rating />
      <textarea
        className="bg-slate-100 p-3 resize-none min-h-[100px] rounded"
        placeholder="Введите отзыв"
        onChange={onTextChange}
        value={text}
      />
      <button className="flex justify-center items-center gap-2 w-full px-3 py-2 rounded bg-blue-500 text-white lg:py-3">
        Отправить
        {loading && <Loader />}
      </button>
    </form>
  );
};
