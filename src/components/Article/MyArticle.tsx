import { FC } from "react";
import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IArticle } from "../../types";
import { Tag } from "@/components";
import { MdDelete } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { deleteArticle } from "@/utils";
import { myArticles } from "@/store/slices/myArticlesSlice";

interface IProps {
  data: IArticle;
}

export const MyArticle: FC<IProps> = ({ data }) => {
  const myArticlesStates = useAppSelector(myArticles).articles;
  const text = data && data.elements.find((el) => el.type === "text");
  const dispatch = useAppDispatch();

  return (
    <div className="w-full rounded overflow-hidden">
      <div className="flex flex-col gap-3">
        {data.banner && (
          <img className="w-full h-auto" src={data.banner} alt="image" />
        )}
        <div className="flex flex-col gap-3">
          <h2 className="font-medium leading-5">{data.title}</h2>

          <p className="text-sm font-light text-gray-500">
            {text && text.value && text.value.slice(0, 200) + " ..."}
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            {data.tags.map((tag, idx) => {
              return <Tag key={idx} tag={tag} />;
            })}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <AiOutlineEye size={15} />
              <p className="text-sm text-gray-300 font-light">
                {data.views} просмотров
              </p>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <Link
                to={`/edit-article/${data._id}`}
                className="rounded bg-blue-500 p-1 w-7 h-7 cursor-pointer"
              >
                <AiOutlineEdit size={20} color="#fff" />
              </Link>
              <button
                className="rounded bg-blue-500 p-1 w-7 h-7 cursor-pointer"
                onClick={async () => {
                  await deleteArticle(data._id, dispatch, myArticlesStates);
                }}
              >
                <MdDelete size={20} color="#fff" />
              </button>
              <Link
                className="px-2 py-1 text-sm bg-blue-500 text-white rounded"
                to={`/articles/${data._id}`}
              >
                Посетить
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
