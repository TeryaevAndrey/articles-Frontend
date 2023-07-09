import { FC, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { IElement } from "../types";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getOpenedArticle, getComments } from "@/utils";
import { ArticleSidebar, Comments, Loader } from "@/components";
import { openedArticle } from "@/store/slices/openedArticleSlice";
import { loaders } from "@/store/slices/loadersSlice";

const ArticlePage: FC = () => {
  const dispatch = useAppDispatch();
  const articleData = useAppSelector(openedArticle).article;
  const comments = useAppSelector(openedArticle).comments;
  const loading = useAppSelector(loaders).loadingOpenedArticle;
  const commentsLoading = useAppSelector(loaders).loadingGetComments;
  const { articleId } = useParams();
  const [commentsPage, setCommentsPage] = useState(1);
  const commentsBlockRef = useRef(null);
  const [commentsFetching, setCommentsFetching] = useState(false);

  const scrollHandler = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight &&
      comments.total > comments.commentsList.length
    ) {
      setCommentsFetching(true);
    }
  };

  useEffect(() => {
    if (commentsFetching) {
      setCommentsPage((prev) => prev + 1);
    }

    setCommentsFetching(false);
  }, [commentsFetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [comments]);

  useEffect(() => {
    if (articleId) {
      dispatch(getOpenedArticle(articleId));
    }
  }, [articleId]);

  useEffect(() => {
    if (articleId) {
      dispatch(
        getComments(
          articleId,
          3,
          commentsPage ? commentsPage : 1,
          comments.commentsList
        )
      );
    }
  }, [commentsPage]);

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
                <div className="mt-7" ref={commentsBlockRef}>
                  <Comments
                    comments={{
                      total: comments.total,
                      commentsList: comments.commentsList,
                    }}
                  />
                  {commentsLoading && (
                    <div className="flex justify-center">
                      <Loader
                        style={{
                          width: "40px",
                          height: "40px",
                          color: "#3b82f6",
                        }}
                      />
                    </div>
                  )}
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
