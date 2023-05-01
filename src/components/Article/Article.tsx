import React, { FC, useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IArticle } from "../../types";
import Tag from "./Tag";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../store/store";
import getFavouriteArticle from "../../utils/getFavouriteArticle";
import addToFavourite from "../../utils/addToFavourite";

const Article: FC<IArticle> = ({ _id, title, banner, elements, tags, views, from, createdAt, updatedAt }) => {
  const dispatch = useAppDispatch();
  const text = elements.find((el) => el.type === "text");
  const favouriteArticles = useAppSelector((state) => state.favourite.articles);
  const isAuth = useAppSelector((state) => state.main.isAuth);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  React.useEffect(() => {
    const getFavourite = async () => {
      setIsFavourite(await getFavouriteArticle(_id));
    }

    getFavourite();
  }, []);

  return (
    <div className="w-full rounded overflow-hidden">
      <div className="flex flex-col gap-3">
        {banner && (
          <img
            className="w-full h-auto"
            src={banner}
            alt="image"
          />
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

          <div className="flex items-center gap-2 flex-wrap">
            {tags.map((tag, idx) => {
              return <Tag key={idx} tag={tag} />
            })}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <AiOutlineEye size={15} />
              <p className="text-sm text-gray-300 font-light">{views} просмотров</p>
            </div>
            <div className="flex items-center gap-3">
              {
                (isFavourite && isAuth) ? (
                  <BsBookmarkFill className="text-blue-500 cursor-pointer" size={20} />
                ) : (
                  <BsBookmark className="text-blue-500 cursor-pointer" size={20} onClick={() => addToFavourite(_id)} />
                )
              }
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
    </div>
  );
};

export default Article;
