import React, { FC } from "react";
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IArticle } from "../../types";

const MyArticle: FC<IArticle> = ({ _id, title, banner, elements, tags, views, from, createdAt, updatedAt }) => {
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
              <p className="text-sm text-gray-300 font-light">10 просмотров</p>
            </div>
            <Link
              to="/edit-article/asdasd"
              className="rounded bg-blue-500 p-1 w-7 h-7 ml-auto mr-3 cursor-pointer"
            >
              <AiOutlineEdit size={20} color="#fff" />
            </Link>
            <Link
              className="px-2 py-1 text-sm bg-blue-500 text-white rounded"
              to="/articles/asdsa;d"
            >
              Посетить
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArticle;
