import React, { FC } from "react";
import Rating from "./Rating";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { setText } from "../../../store/slices/CommentSlice";

const AddComment: FC = () => {
  const text = useAppSelector((state) => state.comment.text);
  const dispatch = useAppDispatch();

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setText(e.target.value));
  }

  return (
    <form className="flex flex-col gap-3">
      <Rating />
      <textarea
        className="bg-slate-100 p-3 resize-none min-h-[100px] rounded"
        placeholder="Введите отзыв"
        onChange={onTextChange}
        value={text}
      />
      <button className="w-full px-3 py-2 rounded bg-blue-500 text-white lg:py-3">
        Отправить
      </button>
    </form>
  );
};

export default AddComment;
