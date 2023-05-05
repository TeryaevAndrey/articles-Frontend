import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useParams } from "react-router-dom";
import getFavouriteArticles from "../utils/getFavouriteArticles";
import Article from "../components/Article/Article";
import Pagination from "../components/Pagination/Pagination";
import { IFavourite } from "../types";

const FavouritePage: FC = () => {
  const dispatch = useAppDispatch();
  const { page } = useParams();
  const favourite = useAppSelector((state) => state.favourite.articles);
  const total = useAppSelector((state) => state.favourite.total);
  const limit = 5;

  useEffect(() => {
    dispatch(getFavouriteArticles(5, page ? Number(page.slice(4)) : 1));
  }, [page]);

  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse lg:justify-start lg:gap-10 py-5">
          <div className="w-full">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 lg:mt-0">
              {favourite.map((el: IFavourite) => {
                return (
                  <Article
                    key={el.articleId._id}
                    _id={el.articleId._id}
                    title={el.articleId.title}
                    banner={el.articleId.banner}
                    elements={el.articleId.elements}
                    tags={el.articleId.tags}
                    views={el.articleId.views}
                    from={el.articleId.from}
                    createdAt={el.articleId.createdAt}
                    updatedAt={el.articleId.updatedAt}
                  />
                );
              })}
            </div>
            {favourite.length > 0 && (
              <div className="mt-12 flex justify-center">
                <Pagination
                  total={total}
                  limit={limit}
                  currentPage={page ? Number(page?.slice(4)) : 1}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouritePage;
