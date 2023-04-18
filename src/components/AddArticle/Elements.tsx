import React, { FC, useState, useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { MdDeleteForever } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { CiImport } from "react-icons/ci";
import { setElements } from "../../store/slices/addArticleSlice";

const Elements: FC = () => {
  const elements = useAppSelector((state) => state.addArticle.elements);
  const dispatch = useAppDispatch();

  const updateFieldChanged = (idx: number, type: string, value: string) => {
    let newArr = [...elements];
    newArr[idx] = { type, value };

    dispatch(setElements(newArr));
  }

  console.log(elements);

  return (
    <>
      {elements.map((el, idx) => {
        if (el.type === "text") {
          return (
            <div className="flex items-start gap-5" key={idx}>
              <textarea
                className="p-3 leading-7 resize-none w-full min-h-[200px] rounded whitespace-pre-line"
                placeholder="Введите текст..."
                onChange={(e) => updateFieldChanged(idx, el.type, e.target.value)}
                value={el.value}
              />
              <MdDeleteForever
                onClick={() =>
                  dispatch(
                    setElements(elements.filter((_, elIdx) => idx !== elIdx))
                  )
                }
                className="cursor-pointer"
                size={25}
                color="red"
              />
            </div>
          );
        } else if (el.type === "title") {
          return (
            <div className="flex items-start gap-5" key={idx}>
              <input
                className="w-full p-3"
                placeholder="Введите подзаголовок..."
                onChange={(e) => updateFieldChanged(idx, el.type, e.target.value)}
                value={el.value}
              />
              <MdDeleteForever
                onClick={() =>
                  dispatch(
                    setElements(elements.filter((_, elIdx) => idx !== elIdx))
                  )
                }
                className="cursor-pointer"
                size={25}
                color="red"
              />
            </div>
          );
        } else if (el.type === "img") {
          let id = uuidv4();

          return (
            <div className="flex items-start gap-5" key={id}>
              <div className="w-full">
                <label
                  className="p-3 max-w-full w-full min-h-[100px] bg-white rounded flex justify-center items-center active:bg-gray-300 cursor-pointer"
                  htmlFor={id}
                >
                  <CiImport size={50} />
                </label>
                <input
                  className="hidden"
                  type="file"
                  placeholder="Загрузите изображение..."
                  id={id}
                />
              </div>
              <MdDeleteForever
                onClick={() =>
                  dispatch(
                    setElements(elements.filter((_, elIdx) => idx !== elIdx))
                  )
                }
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
