import { FC, useEffect, ChangeEvent, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import {
  comment,
  setRating,
  setText,
} from "../../../store/slices/commentSlice";
import { useLocation } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import {
  loaders,
  setLoadingAddComment,
} from "../../../store/slices/loadersSlice";
import {
  openedArticle,
  setOpenedArticleComments,
} from "../../../store/slices/openedArticleSlice";
import { Rating, Loader } from "@/components";

export const AddComment: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { article, comments } = useAppSelector(openedArticle);
  const { rating, text } = useAppSelector(comment);
  const loading = useAppSelector(loaders).loadingAddComment;
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;

  useEffect(() => {
    dispatch(setText(""));
  }, [location]);

  const onTextChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    dispatch(setText(e.target.value));
  };

  const formHandler = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
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

        dispatch(
          setOpenedArticleComments({
            total: comments?.total + 1,
            commentsList: [res.data.comment, ...comments.commentsList],
          })
        );

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
