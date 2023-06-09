import { FC } from "react";
import { useAppSelector } from "../../../store/store";
import { ArticleProfile, Loader, Tag } from "@/components";

interface IProps {
  loading?: boolean;
}

export const ArticleSidebar: FC<IProps> = ({ loading }) => {
  const articleData = useAppSelector((state) => state.openedArticle.article);
  const date = new Date(articleData.createdAt!);

  return (
    <div className="bg-slate-100 rounded w-full h-max lg:gap-x-10 shadow p-3">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Loader style={{ width: "40px", height: "40px", color: "#3b82f6" }} />
        </div>
      ) : (
        <div className="w-full flex flex-col gap-3">
          <ArticleProfile
            avatar={articleData.from?.avatar}
            userName={articleData.from?.userName!}
          />
          <div>
            <div className="flex items-center gap-3">
              <p className="text-gray-400 text-sm">Дата создания:</p>
              <p>{date.toLocaleDateString()}</p>
            </div>
          </div>
          {articleData.tags.length > 0 && (
            <div>
              <h5 className="text-gray-600">Теги</h5>
              <div className="flex items-center gap-2 flex-wrap mt-3">
                {articleData.tags.map((tag, idx) => {
                  return <Tag key={idx} tag={tag} />;
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
