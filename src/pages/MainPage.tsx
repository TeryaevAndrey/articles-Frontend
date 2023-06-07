import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import getAllArticles from "../utils/getAllArticles";
import { useParams } from "react-router-dom";
import { Popular, Article, Pagination } from "@/components";

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const { page } = useParams();
  const articles = useAppSelector((state) => state.allArticles.articles);
  const total = useAppSelector((state) => state.allArticles.total);
  const limit = 10;

  useEffect(() => {
    dispatch(getAllArticles(10, page ? Number(page.slice(4)) : 1));
  }, [page, window.location.search]);

  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse lg:justify-start lg:gap-10 py-5">
          <div className="mt-4 lg:mt-0 w-full lg:w-[30%]">
            <Popular beforeUrl="/all/page1" />
          </div>

          <div className="lg:w-[70%]">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-5 lg:mt-0">
              {articles.map((el) => {
                return (
                  <Article
                    key={el._id}
                    _id={el._id}
                    title={el.title}
                    banner={el.banner}
                    elements={el.elements}
                    tags={el.tags}
                    views={el.views}
                    from={el.from}
                    createdAt={el.createdAt}
                    updatedAt={el.updatedAt}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
