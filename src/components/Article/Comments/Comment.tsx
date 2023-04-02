import React, { FC } from "react";
import Profile from "../Profile";

const Comment: FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <Profile />

      <div className="leading-7">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quisquam reprehenderit omnis cupiditate totam sapiente necessitatibus,
          praesentium ipsum dignissimos vitae.
        </p>
      </div>
    </div>
  );
};

export default Comment;
