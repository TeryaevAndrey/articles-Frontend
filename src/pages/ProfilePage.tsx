import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getMyArticles } from "@/utils";
import { useParams } from "react-router-dom";
import { Pagination, MyArticle } from "@/components";
import { myArticles } from "@/store/slices/myArticlesSlice";

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const { page } = useParams();
  const articles = useAppSelector(myArticles).articles;
  const total = useAppSelector(myArticles).total;
  const limit = 10;

  useEffect(() => {
    dispatch(getMyArticles(10, page ? Number(page.slice(4)) : 1));
  }, [page]);

  return (
    <div className="py-5">
      <div className="container mx-auto px-4">
        <h1 className="text-lg font-medium">Мои статьи</h1>
        <div className="mt-5">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 lg:mt-0">
            {articles.map((el) => {
              return <MyArticle key={el._id} data={el} />;
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
  );
};

export default ProfilePage;
