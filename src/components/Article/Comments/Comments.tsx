import { FC } from "react";
import { IComment } from "../../../types";
import { AddComment, Comment } from "@/components";

interface IProps {
  comments: {
    total: number;
    commentsList: IComment[];
  };
}

export const Comments: FC<IProps> = ({ comments }) => {

  return (
    <div className="flex flex-col gap-3 w-full">
      <h3 className="text-lg font-medium">Отзывы</h3>

      <AddComment />

      <div className="flex flex-col gap-3 mt-5">
        {comments.commentsList &&
          comments.commentsList.map((comment) => {
            return (
              <Comment
                key={comment._id}
                comment={comment}
                comments={comments}
              />
            );
          })}
      </div>
    </div>
  );
};
