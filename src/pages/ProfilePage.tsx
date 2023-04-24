import React, { FC } from "react";
import Pagination from "../components/Pagination/Pagination";
import MyArticle from "../components/Article/MyArticle";
import { useAppDispatch, useAppSelector } from "../store/store";
import getMyArticles from "../utils/getMyArticles";
import { setCurrentPage } from "../store/slices/myArticlesSlice";

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.myArticles.articles);
  const page = useAppSelector((state) => state.myArticles.page);
  const currentPage = useAppSelector((state) => state.myArticles.currentPage);
  const total = useAppSelector((state) => state.myArticles.total);
  const limit = useAppSelector((state) => state.myArticles.limit);

  React.useEffect(() => {
    dispatch(getMyArticles(10, page));
  }, [page]);

  return (
    <div className="py-5">
      <div className="container mx-auto px-4">
        <h1 className="text-lg font-medium">Мои статьи</h1>
        <div className="mt-5">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 lg:mt-0">
            {
              articles.map((el) => {
                return <MyArticle key={el._id} _id={el._id} title={el.title} banner={el.banner} elements={el.elements} tags={el.tags} views={el.views} from={el.from} createdAt={el.createdAt} updatedAt={el.updatedAt} />
              })
            }
          </div>
          <div className="mt-12 flex justify-center">
            <Pagination total={total} limit={limit} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
