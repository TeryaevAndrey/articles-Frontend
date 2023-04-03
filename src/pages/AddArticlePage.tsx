import React, { FC } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCardText, BsCheck, BsImage } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  setElements,
  setIsOpenElements,
  setTags,
} from "../store/slices/addArticleSlice";
import Elements from "../components/AddArticle/Elements";
import Tags from "../components/AddArticle/Tags";

const AddArticlePage: FC = () => {
  const isOpenElements = useAppSelector(
    (state) => state.addArticle.isOpenElements
  );
  const [tagValue, setTagValue] = React.useState<string>("");
  const elements = useAppSelector((state) => state.addArticle.elements);
  const tags = useAppSelector((state) => state.addArticle.tags);
  const dispatch = useAppDispatch();

  return (
    <div className="py-5">
      <div className="container mx-auto px-4">
        <h1 className="text-lg font-medium">Добавление статьи</h1>
        <form className="mt-5">
          <div className="mb-5 flex flex-col gap-5">
            <input
              className="p-3 font-medium text-lg"
              type="text"
              placeholder="Введите заголовок..."
            />

            <Elements />
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
                      dispatch(setElements([...elements, "text"]));
                      dispatch(setIsOpenElements(false));
                    }}
                    className="flex items-center gap-2 px-2 py-3 cursor-pointer border-b border-gray-300 border-solid hover:bg-gray-200 ease-linear duration-200 active:bg-gray-200"
                  >
                    <BsCardText />
                    Текст
                  </div>
                  <div
                    onClick={() => {
                      dispatch(setElements([...elements, "title"]));
                      dispatch(setIsOpenElements(false));
                    }}
                    className="flex items-center gap-2 px-2 py-3 cursor-pointer border-b border-gray-300 border-solid hover:bg-gray-200 ease-linear duration-200 active:bg-gray-200"
                  >
                    <BsCardText />
                    Подзаголовок
                  </div>
                  <div
                    onClick={() => {
                      dispatch(setElements([...elements, "img"]));
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
                    dispatch(setTags([...tags, tagValue]));
                    setTagValue("");
                  }}
                >
                  <BsCheck size={25} color="#fff" />
                </button>
              </div>
            </div>

            <Tags />
          </div>

          <button className="w-full p-3 bg-blue-500 text-white rounded mt-10">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArticlePage;
