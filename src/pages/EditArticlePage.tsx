import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { BsCardText, BsCheck, BsImage } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import EditElements from "../components/EditArticle/EditElements";
import { useParams } from "react-router-dom";
import {
  setBanner,
  setElements,
  setIsOpenElements,
  setTags,
  setTitle,
} from "../store/slices/editArticleSlice";
import getEditArticle from "../utils/getEditArticle";
import axios, { AxiosResponse } from "axios";
import Tags from "../components/Tags";

const EditArticlePage: FC = () => {
  const dispatch = useAppDispatch();
  const { articleId } = useParams();
  const isOpenElements = useAppSelector(
    (state) => state.editArticle.isOpenElements
  );
  const article = useAppSelector((state) => state.editArticle.article);
  const title = useAppSelector((state) => state.editArticle.title);
  const banner = useAppSelector((state) => state.editArticle.banner);
  const elements = useAppSelector((state) => state.editArticle.elements);
  const tags = useAppSelector((state) => state.editArticle.tags);
  const [tagValue, setTagValue] = React.useState<string>("");
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;

  useEffect(() => {
    if (articleId) {
      dispatch(getEditArticle(articleId));
    }
  }, []);

  useEffect(() => {
    if (article) {
      dispatch(setTitle(article.title));
      dispatch(setBanner(article.banner));
      dispatch(setElements(article.elements));
      dispatch(setTags(article.tags));
    }
  }, [article]);

  const formHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    await axios
      .post(
        import.meta.env.VITE_PROXY + `/edit-article/${articleId}`,
        {
          title,
          banner,
          elements,
          tags,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res: AxiosResponse) => {
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="py-5">
      <div className="container mx-auto px-4">
        <h1 className="text-lg font-medium">Добавление статьи</h1>
        <form className="mt-5" onSubmit={formHandler}>
          <div className="mb-5 flex flex-col gap-5">
            <EditElements />
          </div>

          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-2"
              onClick={() => dispatch(setIsOpenElements(!isOpenElements))}
            >
              <AiOutlinePlus />
              Добавить элемент
            </button>

            {isOpenElements && (
              <div className="absolute top-[200%] bg-slate-100 w-full max-w-[250px] rounded overflow-none">
                <div className="flex flex-col">
                  <div
                    onClick={() => {
                      dispatch(
                        setElements([
                          ...elements,
                          {
                            type: "text",
                            value: "",
                          },
                        ])
                      );
                      dispatch(setIsOpenElements(false));
                    }}
                    className="flex items-center gap-2 px-2 py-3 cursor-pointer border-b border-gray-300 border-solid hover:bg-gray-200 ease-linear duration-200 active:bg-gray-200"
                  >
                    <BsCardText />
                    Текст
                  </div>
                  <div
                    onClick={() => {
                      dispatch(
                        setElements([
                          ...elements,
                          {
                            type: "title",
                            value: "",
                          },
                        ])
                      );
                      dispatch(setIsOpenElements(false));
                    }}
                    className="flex items-center gap-2 px-2 py-3 cursor-pointer border-b border-gray-300 border-solid hover:bg-gray-200 ease-linear duration-200 active:bg-gray-200"
                  >
                    <BsCardText />
                    Подзаголовок
                  </div>
                  <div
                    onClick={() => {
                      dispatch(
                        setElements([
                          ...elements,
                          {
                            type: "img",
                            src: undefined,
                          },
                        ])
                      );
                      dispatch(setIsOpenElements(false));
                    }}
                    className="flex items-center gap-2 px-2 py-3 cursor-pointer border-b border-gray-300 border-solid hover:bg-gray-200 ease-linear duration-200 active:bg-gray-200"
                  >
                    <BsImage />
                    Изображение
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-5 mt-10">
            <h3 className="text-lg font-medium">Теги</h3>
            <div className="flex flex-col gap-3">
              <p>Добавить тег</p>
              <div className="flex items-center gap-2">
                <input
                  className="p-3 max-w-[300px] w-full rounded h-11"
                  type="text"
                  placeholder="Добавить тег"
                  value={tagValue}
                  onChange={(e) => setTagValue(e.target.value)}
                />
                <button
                  type="button"
                  className="flex justify-center items-center p-3 bg-blue-500 rounded w-11 h-11"
                  onClick={() => {
                    if (tagValue.length > 0) {
                      dispatch(setTags([...tags, tagValue]));
                      setTagValue("");
                    }
                  }}
                >
                  <BsCheck size={25} color="#fff" />
                </button>
              </div>
            </div>

            <Tags tags={tags} setTags={setTags} />
          </div>

          <button
            className="w-full p-3 bg-blue-500 text-white rounded mt-10"
            type="submit"
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditArticlePage;
