import React, { FC } from "react";
import Crumbs from "../components/Crumbs/Crumbs";
import { useParams } from "react-router-dom";

const ArticlePage: FC = () => {
  const { articleId } = useParams();

  return (
    <div className="py-5">
      <div className="container mx-auto px-4">
        <div className="py-1.5 md:py-3">
          <Crumbs
            way={[{ title: `${articleId}`, href: `/articles/${articleId}` }]}
          />
        </div>

        <div className="flex flex-col gap-3 mt-5">
          <div>
            <h1 className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur.
            </h1>

            <div className="relative w-full h-52 mt-5 rounded overflow-hidden">
              <img
                className="absolute left-0 top-0 object-cover w-full h-full"
                src="https://img2.fonwall.ru/o/pp/vodopad-skaly-potok.jpg?route=mid&amp;h=750"
                alt="image"
              />
            </div>

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

            <div className="relative w-full h-52 mt-5 rounded overflow-hidden">
              <img
                className="absolute left-0 top-0 object-cover w-full h-full"
                src="https://img2.fonwall.ru/o/pp/vodopad-skaly-potok.jpg?route=mid&amp;h=750"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
