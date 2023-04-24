import React, { FC, useEffect } from "react";
import Crumbs from "../components/Crumbs/Crumbs";
import { useParams } from "react-router-dom";
import ArticleSidebar from "../components/Article/ArticleSidebar/ArticleSidebar";
import Comments from "../components/Article/Comments/Comments";
import { IArticle } from "../types";
import { useAppDispatch, useAppSelector } from "../store/store";
import getOpenedArticle from "../utils/getOpenedArticle";

interface IArticlePage {
  way: { title: string; href: string }[]
}

const ArticlePage: FC<IArticlePage> = () => {
  const { articleId } = useParams();
  const articleData = useAppSelector((state) => state.openedArticle.article);
  const loading = useAppSelector((state) => state.loaders.loadingOpenedArticle);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOpenedArticle(articleId!));
  }, []);

  console.log(articleData);

  return (
    <div className="py-5">
      <div className="container mx-auto px-4">
        <div className="py-1.5 md:py-3">
          <Crumbs
            way={[]}
          />
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-3 lg:gap-10 mt-1.5 lg:mt-3 w-full">
          <div className="mt-5 lg:w-[30%]">
            <ArticleSidebar />
          </div>

          <div className="lg:w-[70%]">
            <h1 className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur.
            </h1>

            <div className="mt-3">
              <img
                className="lg:max-w-[75%] w-full h-auto object-cover"
                src="https://img2.fonwall.ru/o/pp/vodopad-skaly-potok.jpg?route=mid&amp;h=750"
                alt="image"
              />

              <p className="leading-7 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                illum consectetur ad consequuntur nihil placeat deserunt
                recusandae inventore unde repellendus, nulla libero fugiat fugit
                alias exercitationem veritatis minima facilis a.
              </p>

              <p className="leading-7 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                illum consectetur ad consequuntur nihil placeat deserunt
                recusandae inventore unde repellendus, nulla libero fugiat fugit
                alias exercitationem veritatis minima facilis a.
              </p>

              <img
                className="lg:max-w-[75%] w-full h-auto object-cover mt-3"
                src="https://img2.fonwall.ru/o/pp/vodopad-skaly-potok.jpg?route=mid&amp;h=750"
                alt="image"
              />
            </div>
          </div>
        </div>

        <div className="mt-7">
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
