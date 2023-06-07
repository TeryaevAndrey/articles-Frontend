import React, { FC } from "react";
import { IComment } from "../../../types";
import { AddComment, Comment } from "@/components";

interface IComments {
  comments: IComment[];
}

export const Comments: FC<IComments> = ({ comments }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h3 className="text-lg font-medium">Отзывы</h3>

      <AddComment />

      <div className="flex flex-col gap-3 mt-5">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment._id}
              _id={comment._id}
              from={comment.from}
              articleId={comment.articleId}
              rating={comment.rating}
              text={comment.text}
              createdAt={comment.createdAt}
              updatedAt={comment.updatedAt}
            />
          );
        })}
      </div>
    </div>
  );
};
