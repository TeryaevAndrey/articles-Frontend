import React, { FC } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IArticle } from "../../types";

const Article: FC<IArticle> = ({ _id, title, banner, elements, tags, views, from, createdAt, updatedAt }) => {
  const text = elements.find((el) => el.type === "text");

  return (
    <div className="w-full rounded overflow-hidden">
      <div className="flex flex-col gap-3">
        {banner && (
          <div className="relative w-full h-52">
            <img
              className="absolute left-0 top-0 object-cover w-full h-full"
              src={banner}
              alt="image"
            />
          </div>
        )}
        <div className="flex flex-col gap-3">
          <h2 className="font-medium leading-5">
            {title}
          </h2>

          <p className="text-sm font-light text-gray-500">
            {
              (text && text.value) && (
                text.value.slice(0, 200) + " ..."
              )
            }
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <AiOutlineEye size={15} />
              <p className="text-sm text-gray-300 font-light">{views} просмотров</p>
            </div>
            <Link
              className="px-2 py-1 text-sm bg-blue-500 text-white rounded"
              to={`/articles/${_id}`}
            >
              Посетить
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
