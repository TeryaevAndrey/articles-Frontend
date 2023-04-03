import React, { FC } from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";

const Comments: FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-medium">Отзывы</h3>

      <AddComment />

      <div className="flex flex-col gap-3 mt-5">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default Comments;
