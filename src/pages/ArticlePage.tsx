import React, { FC, useEffect } from "react";
import Crumbs from "../components/Crumbs/Crumbs";
import { useParams } from "react-router-dom";
import ArticleSidebar from "../components/Article/ArticleSidebar/ArticleSidebar";
import Comments from "../components/Article/Comments/Comments";
import { IElement } from "../types";
import { useAppDispatch, useAppSelector } from "../store/store";
import getOpenedArticle from "../utils/getOpenedArticle";
import getComments from "../utils/getComments";

const ArticlePage: FC = () => {
  const { articleId } = useParams();
  const articleData = useAppSelector((state) => state.openedArticle.article);
  const loading = useAppSelector((state) => state.loaders.loadingOpenedArticle);
  const comments = useAppSelector((state) => state.openedArticle.comments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (articleId) {
      dispatch(getOpenedArticle(articleId));
      dispatch(getComments(articleId));
    }
  }, []);

  console.log(comments);

  return (
    <div className="py-5">
      <div className="container mx-auto px-4">
        <div className="py-1.5 md:py-3">
          <Crumbs
            way={[]}
          />
        </div>

        {
          loading ? (
            <p>Загрузка...</p>
          ) : (
            <div className="flex flex-col lg:flex-row-reverse gap-3 lg:gap-10 mt-1.5 lg:mt-3 w-full">
              <div className="mt-5 lg:w-[30%]">
                <ArticleSidebar />
              </div>

              <div className="lg:w-[70%]">
                <h1 className="text-lg font-medium">
                  {articleData.title}
                </h1>

                {
                  articleData.banner && (
                    <img
                      className="lg:max-w-[75%] w-full h-auto object-cover mt-2.5"
                      src={articleData.banner}
                      alt="image" />
                  )
                }

                <div className="mt-3">
                  {
                    articleData.elements.map((el: IElement, idx) => {
                      if (el.type === "img") {
                        return <img key={idx}
                          className="lg:max-w-[75%] w-full h-auto object-cover"
                          src={el.src}
                          alt="image"
                        />
                      } else if (el.type === "title") {
                        return <h1 className="text-lg font-medium" key={idx}>
                          {el.value}
                        </h1>
                      } else if (el.type === "text") {
                        return <p className="leading-7 mt-5" key={idx}>
                          {el.value}
                        </p>
                      }
                    })
                  }
                </div>
                <div className="mt-7">
                  <Comments comments={comments} />
                </div>
              </div>
            </div>
          )
        }
      </div >
    </div >
  );
};

export default ArticlePage;
