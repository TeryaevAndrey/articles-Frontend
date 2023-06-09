import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useParams } from "react-router-dom";
import { getFavouritesArticles } from "@/utils";
import { IFavourite } from "../types";
import { Article, Pagination } from "@/components";
import { favourites } from "@/store/slices/favouritesSlice";

const FavouritePage: FC = () => {
  const dispatch = useAppDispatch();
  const { page } = useParams();
  const favouritesData = useAppSelector(favourites).articles;
  const total = useAppSelector(favourites).total;
  const limit = 5;

  useEffect(() => {
    dispatch(getFavouritesArticles(5, page ? Number(page.slice(4)) : 1));
  }, [page]);

  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse lg:justify-start lg:gap-10 py-5">
          <div className="w-full">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 lg:mt-0">
              {favouritesData &&
                favouritesData.map((el: IFavourite) => {
                  if (typeof el.articleId === "object") {
                    return (
                      <Article
                        key={el._id}
                        data={el.articleId}
                        favourites={favouritesData}
                      />
                    );
                  }
                })}
            </div>
            {favouritesData && favouritesData.length > 0 && (
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
