import { FC } from "react";
import { IComment } from "../../../types";
import { ArticleProfile, RatingShow } from "@/components";
import { MdDelete } from "react-icons/md";
import { useAppSelector } from "@/store/store";

export const Comment: FC<IComment> = ({
  _id,
  from,
  articleId,
  rating,
  text,
  createdAt,
  updatedAt,
}) => {
  const currentUserId = useAppSelector((state) => state.user.myData._id);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 flex-wrap">
        <ArticleProfile avatar={from.avatar} userName={from.userName!} />
        <div className="flex items-center gap-2">
          <p>{new Date(createdAt).toLocaleDateString()}</p>
          <p>{new Date(createdAt).toLocaleTimeString()}</p>
        </div>

        {currentUserId === from._id && (
          <MdDelete className="text-red-500 cursor-pointer" size={20} />
        )}
      </div>

      <RatingShow rating={rating} />

      <div className="leading-7">
        <p>{text}</p>
      </div>
    </div>
  );
};
