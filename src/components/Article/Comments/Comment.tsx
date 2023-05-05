import React, { FC } from "react";
import Profile from "../Profile";
import { IComment } from "../../../types";
import RatingShow from "./RatingShow";

const Comment: FC<IComment> = ({
  _id,
  from,
  articleId,
  rating,
  text,
  createdAt,
  updatedAt,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 flex-wrap">
        <Profile avatar={from.avatar} userName={from.userName!} />
        <div className="flex items-center gap-2">
          <p>{new Date(createdAt).toLocaleDateString()}</p>
          <p>{new Date(createdAt).toLocaleTimeString()}</p>
        </div>
      </div>

      <RatingShow rating={rating} />

      <div className="leading-7">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
