import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IElement } from "../types";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getOpenedArticle, getComments } from "@/utils";
import { Crumbs, ArticleSidebar, Comments, Loader } from "@/components";
import { openedArticle } from "@/store/slices/openedArticleSlice";
import { loaders } from "@/store/slices/loadersSlice";

const ArticlePage: FC = () => {
  const dispatch = useAppDispatch();
  const articleData = useAppSelector(openedArticle).article;
  const comments = useAppSelector(openedArticle).comments;
  const loading = useAppSelector(loaders).loadingOpenedArticle;
  const { articleId } = useParams();

  useEffect(() => {
    if (articleId) {
      dispatch(getOpenedArticle(articleId));
      dispatch(getComments(articleId));
    }
  }, []);

  return (
    <div className="py-5 flex flex-grow">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse gap-3 lg:gap-10 mt-1.5 lg:mt-3 w-full h-full">
          <div className="lg:mt-0 lg:w-[30%]">
            <ArticleSidebar loading={loading} />
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
                <h1 className="text-lg font-medium">{articleData.title}</h1>

                {articleData.banner && (
                  <img
                    className="lg:max-w-[75%] w-full h-auto object-cover mt-2.5"
                    src={articleData.banner}
                    alt="image"
                  />
                )}

                <div className="mt-3">
                  {articleData.elements.map((el: IElement, idx) => {
                    if (el.type === "img") {
                      return (
                        <img
                          key={idx}
                          className="lg:max-w-[75%] w-full h-auto object-cover"
                          src={el.src}
                          alt="image"
                        />
                      );
                    } else if (el.type === "title") {
                      return (
                        <h1 className="text-lg font-medium" key={idx}>
                          {el.value}
                        </h1>
                      );
                    } else if (el.type === "text") {
                      return (
                        <p className="leading-7 mt-5" key={idx}>
                          {el.value}
                        </p>
                      );
                    }
                  })}
                </div>
                <div className="mt-7">
                  <Comments comments={comments} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
