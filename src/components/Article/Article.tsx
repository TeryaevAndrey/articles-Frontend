import React, { FC, useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IArticle, IFavourite } from "../../types";
import Tag from "./Tag";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../store/store";
import getFavouriteArticle from "../../utils/getFavouriteArticle";
import addToFavourite from "../../utils/addToFavourite";
import deleteFavouriteArticle from "../../utils/deleteFavouriteArticle";

const Article: FC<IArticle> = ({ _id, title, banner, elements, tags, views, from, createdAt, updatedAt }) => {
  const dispatch = useAppDispatch();
  const text = elements.find((el) => el.type === "text");
  const favouriteArticles = useAppSelector((state) => state.favourite.articles);
  const isAuth = useAppSelector((state) => state.main.isAuth);
  const [favouriteInfo, setFavouriteInfo] = useState<{ favourite: IFavourite | undefined; result: boolean; } | undefined>(undefined);

  React.useEffect(() => {
    const getFavourite = async () => {
      const data = await getFavouriteArticle(_id);

      setFavouriteInfo(data);
    }

    getFavourite();
  }, []);

  console.log(favouriteInfo)

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
                (favouriteInfo?.result && isAuth) ? (
                  <BsBookmarkFill className="text-blue-500 cursor-pointer" size={20} onClick={async () => {
                    const data: { message: string; result: boolean } | undefined = await deleteFavouriteArticle(favouriteInfo.favourite?._id);

                    if (data?.result) {
                      setFavouriteInfo(
                        {
                          favourite: undefined,
                          result: false
                        }
                      )
                    }
                  }
                  } />
                ) : (
                  <BsBookmark className="text-blue-500 cursor-pointer" size={20} onClick={async () => {
                    const data: { favourite: IFavourite; message: string } | undefined = await addToFavourite(_id);


                    setFavouriteInfo(
                      {
                        favourite: data?.favourite,
                        result: true
                      }
                    )

                  }} />
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
