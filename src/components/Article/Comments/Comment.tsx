import { FC } from "react";
import { IComment } from "../../../types";
import { ArticleProfile, RatingShow } from "@/components";
import { MdDelete } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { deleteComment } from "@/utils";
import { user } from "@/store/slices/userSlice";

interface IProps {
  comment: IComment;
  comments: {
    total: number;
    commentsList: IComment[];
  };
}

export const Comment: FC<IProps> = ({ comment, comments }) => {
  const { myData } = useAppSelector(user);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 flex-wrap">
        <ArticleProfile
          avatar={comment.from.avatar}
          userName={comment.from.userName!}
        />
        <div className="flex items-center gap-2">
          <p>{new Date(comment.createdAt).toLocaleDateString()}</p>
          <p>{new Date(comment.createdAt).toLocaleTimeString()}</p>
        </div>

        {myData._id === comment.from._id && (
          <MdDelete
            className="text-red-500 cursor-pointer"
            size={20}
            onClick={() =>
              deleteComment(comment._id, dispatch, {
                total: comments.total,
                commentsList: comments.commentsList,
              })
            }
          />
        )}
      </div>

      <RatingShow rating={comment.rating} />

      <div className="leading-7">
        <p>{comment.text}</p>
      </div>
    </div>
  );
};
