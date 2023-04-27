import React, { FC } from "react";
import Profile from "../Profile";
import Popular from "../../Popular/Popular";
import { IUser } from "../../../types";
import { useAppSelector } from "../../../store/store";
import Tag from "../Tag";

const ArticleSidebar: FC = () => {
  const articleData = useAppSelector((state) => state.openedArticle.article);
  const date = new Date(articleData.createdAt!);

  return (
    <div className="bg-slate-100 rounded w-full h-max lg:gap-x-10 shadow p-3">
      <div className="w-full flex flex-col gap-3">
        <Profile avatar={articleData.from?.avatar} userName={articleData.from?.userName!} />
        <div>
          <div className="flex items-center gap-3">
            <p className="text-gray-400 text-sm">Дата создания:</p>
            <p>{date.toLocaleDateString()}</p>
          </div>
        </div>
        <div>
          <h5 className="text-gray-600">Теги</h5>
          <div className="flex items-center gap-2 flex-wrap mt-3">
            {articleData.tags.map((tag) => {
              return <Tag tag={tag} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSidebar;
