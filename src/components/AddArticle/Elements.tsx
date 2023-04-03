import React, { FC } from "react";
import { useAppSelector } from "../../store/store";
import { MdDeleteForever } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { CiImport } from "react-icons/ci";

const Elements: FC = () => {
  const elements = useAppSelector((state) => state.addArticle.elements);

  return (
    <>
      {elements.map((el: string | { src: string; alt: string }, idx) => {
        if (el === "text") {
          return (
            <div className="flex items-start gap-5">
              <textarea
                key={idx}
                className="p-3 leading-7 resize-none w-full min-h-[200px] rounded whitespace-pre-line"
                placeholder="Введите текст..."
              />
              <MdDeleteForever
                className="cursor-pointer"
                size={25}
                color="red"
              />
            </div>
          );
        } else if (el === "title") {
          return (
            <div className="flex items-start gap-5">
              <input
                key={idx}
                className="w-full p-3"
                placeholder="Введите подзаголовок..."
              />
              <MdDeleteForever
                className="cursor-pointer"
                size={25}
                color="red"
              />
            </div>
          );
        } else if (el === "img") {
          let id = uuidv4();

          return (
            <div className="flex items-start gap-5">
              <div className="w-full">
                <label
                  className="p-3 max-w-full w-full min-h-[100px] bg-white rounded flex justify-center items-center active:bg-gray-300 cursor-pointer"
                  htmlFor={id}
                >
                  <CiImport size={50} />
                </label>
                <input
                  className="hidden"
                  key={id}
                  type="file"
                  placeholder="Загрузите изображение..."
                  id={id}
                />
              </div>
              <MdDeleteForever
                className="cursor-pointer"
                size={25}
                color="red"
              />
            </div>
          );
        }
      })}
    </>
  );
};

export default Elements;
