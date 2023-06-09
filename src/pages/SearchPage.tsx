import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useLocation, useParams } from "react-router-dom";
import { getSearchedArticles } from "@/utils";
import { Popular, Article, Pagination } from "@/components";

const SearchPage: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { page } = useParams();
  const articles = useAppSelector((state) => state.searchedArticles.articles);
  const total = useAppSelector((state) => state.searchedArticles.total);
  const limit = 3;
  const searchParams = new URLSearchParams(window.location.search);
  const q = searchParams.get("q");
  const tag = searchParams.get("tag");

  useEffect(() => {
    dispatch(getSearchedArticles(3, page ? Number(page.slice(4)) : 1));
  }, [page, window.location.search]);

  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse lg:justify-start lg:gap-10 py-5">
          <div className="mt-4 lg:mt-0 w-full lg:w-[30%]">
            <Popular beforeUrl={location.pathname} />
          </div>

          <div className="lg:w-[70%]">
            <h1 className="flex items-center mb-5">
              Стетей по запросу:{" "}
              <span className="font-bold text-xl ml-3">
                {q}
                {tag && " / "}
                {tag && `#${tag}`}
              </span>
            </h1>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 lg:mt-0">
              {articles.length > 0 ? (
                articles.map((el) => {
                  return <Article key={el._id} data={el} />;
                })
              ) : (
                <p>Нет статей по этому запросу</p>
              )}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
