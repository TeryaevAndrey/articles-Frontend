import { FC, useState, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IArticle, IFavourite } from "../../types";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useAppSelector } from "../../store/store";
import { addToFavourite, deleteFavouriteArticle } from "@/utils";
import { Tag } from "@/components";
import { main } from "@/store/slices/mainSlice";

interface IProps {
  data: IArticle;
  favourites?: IFavourite[];
}

export const Article: FC<IProps> = ({ data, favourites }) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const { isAuth } = useAppSelector(main);
  const text = data && data.elements.find((el) => el.type === "text");
  const favourite = favourites?.find(
    (el) => el.articleId === data._id || el.articleId._id === data._id
  );

  useEffect(() => {
    if (favourite) {
      setIsFavourite(true);
    }
  }, [favourite]);

  return (
    <div className="w-full rounded overflow-hidden">
      <div className="flex flex-col gap-3">
        {data && (
          <>
            {data.banner && (
              <img className="w-full h-auto" src={data.banner} alt="image" />
            )}
            <div className="flex flex-col gap-3">
              <h2 className="font-medium leading-5">{data.title}</h2>

              <p className="text-sm font-light text-gray-500">
                {text && text.value && text.value.slice(0, 200) + " ..."}
              </p>

              <div className="flex items-center gap-2 flex-wrap">
                {data.tags.map((tag, idx) => {
                  return <Tag key={idx} tag={tag} />;
                })}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <AiOutlineEye size={15} />
                  <p className="text-sm text-gray-300 font-light">
                    {data.views} просмотров
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {isFavourite && isAuth ? (
                    <BsBookmarkFill
                      className="text-blue-500 cursor-pointer"
                      size={20}
                      onClick={async () => {
                        if (favourite) {
                          const favouriteData = await deleteFavouriteArticle(
                            favourite._id
                          );

                          if (favouriteData) {
                            setIsFavourite(false);
                          }
                        }
                      }}
                    />
                  ) : (
                    <BsBookmark
                      className="text-blue-500 cursor-pointer"
                      size={20}
                      onClick={async () => {
                        const favouriteData = await addToFavourite(data._id);

                        if (favouriteData) {
                          setIsFavourite(true);
                        }
                      }}
                    />
                  )}
                  <Link
                    className="px-2 py-1 text-sm bg-blue-500 text-white rounded"
                    to={`/articles/${data._id}`}
                  >
                    Посетить
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
