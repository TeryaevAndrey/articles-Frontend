import React, { FC } from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";
import { IComment } from "../../../types";

interface IComments {
  comments: IComment[];
}

const Comments: FC<IComments> = ({ comments }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h3 className="text-lg font-medium">Отзывы</h3>

      <AddComment />

      <div className="flex flex-col gap-3 mt-5">
        {
          comments.map((comment) => {
            return <Comment key={comment._id} _id={comment._id} from={comment.from} articleId={comment.articleId} rating={comment.rating} text={comment.text} createdAt={comment.createdAt} updatedAt={comment.updatedAt} />
          })
        }
      </div>
    </div>
  );
};

export default Comments;
