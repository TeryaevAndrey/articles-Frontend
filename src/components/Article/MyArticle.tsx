import React, { FC } from "react";
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IArticle } from "../../types";
import { Tag } from "@/components";

export const MyArticle: FC<IArticle> = ({
  _id,
  title,
  banner,
  elements,
  tags,
  views,
  from,
  createdAt,
  updatedAt,
}) => {
  const text = elements.find((el) => el.type === "text");

  return (
    <div className="w-full rounded overflow-hidden">
      <div className="flex flex-col gap-3">
        {banner && <img className="w-full h-auto" src={banner} alt="image" />}
        <div className="flex flex-col gap-3">
          <h2 className="font-medium leading-5">{title}</h2>

          <p className="text-sm font-light text-gray-500">
            {text && text.value && text.value.slice(0, 200) + " ..."}
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            {tags.map((tag, idx) => {
              return <Tag key={idx} tag={tag} />;
            })}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <AiOutlineEye size={15} />
              <p className="text-sm text-gray-300 font-light">
                {views} просмотров
              </p>
            </div>
            <Link
              to={`/edit-article/${_id}`}
              className="rounded bg-blue-500 p-1 w-7 h-7 ml-auto mr-3 cursor-pointer"
            >
              <AiOutlineEdit size={20} color="#fff" />
            </Link>
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
