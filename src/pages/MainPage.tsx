import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getAllArticles } from "@/utils";
import { useParams } from "react-router-dom";
import { Popular, Article, Pagination, Loader } from "@/components";
import { getAllFavouritesArticles } from "@/utils/getAllFavouritesArticles";
import { allArticles } from "@/store/slices/allArticlesSlice";
import { favourites } from "@/store/slices/favouritesSlice";
import { main } from "@/store/slices/mainSlice";
import { loaders } from "@/store/slices/loadersSlice";

const MainPage: FC = () => {
  const articles = useAppSelector(allArticles).articles;
  const total = useAppSelector(allArticles).total;
  const favouritesList = useAppSelector(favourites).articles;
  const isAuth = useAppSelector(main).isAuth;
  const loading = useAppSelector(loaders).loadingArticlesMainPage;
  const limit = 10;
  const dispatch = useAppDispatch();
  const { page } = useParams();

  useEffect(() => {
    dispatch(getAllArticles(10, page ? Number(page.slice(4)) : 1));
  }, [page, window.location.search]);

  useEffect(() => {
    if (isAuth) {
      dispatch(getAllFavouritesArticles);
    }
  }, []);

  return (
    <div className="flex flex-grow">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse lg:justify-start lg:gap-10 py-5 h-full">
          <div className="mt-4 lg:mt-0 w-full lg:w-[30%]">
            <Popular beforeUrl="/all/page1" />
          </div>

          <div className="lg:w-[70%] h-full">
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <Loader
                  style={{ width: "40px", height: "40px", color: "#3b82f6" }}
                />
              </div>
            ) : (
              <>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-5 lg:mt-0">
                  {articles.map((el) => {
                    return (
                      <Article
                        key={el._id}
                        data={el}
                        favourites={favouritesList}
                      />
                    );
                  })}
                </div>
                {articles.length > 0 && (
                  <div className="mt-12 flex justify-center">
                    <Pagination
                      total={total}
                      limit={limit}
                      currentPage={page ? Number(page?.slice(4)) : 1}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
