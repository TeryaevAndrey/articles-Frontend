import React, { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { MdDeleteForever } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { CiImport } from "react-icons/ci";
import { setElements, setTitle } from "../../store/slices/addArticleSlice";
import exportImg from "../../utils/exportImg";
import { deleteImg } from "@/utils";

export const Elements: FC = () => {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.addArticle.title);
  const elements = useAppSelector((state) => state.addArticle.elements);
  const banner = useAppSelector((state) => state.addArticle.banner);
  const [imgLoading, setImgLoading] = useState<boolean>(false);

  const updateFieldChanged = (
    idx: number,
    type: string,
    value: string
  ): void => {
    let newArr = [...elements];
    newArr[idx] = { type, value };

    dispatch(setElements(newArr));
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setTitle(e.target.value));
  };

  return (
    <>
      <input
        className="p-3 font-medium text-lg"
        type="text"
        placeholder="Введите заголовок..."
        onChange={onTitleChange}
        value={title}
      />
      <div className="flex items-start gap-5">
        <div className="w-full">
          <label
            className="p-3 max-w-full w-full min-h-[100px] bg-white rounded flex justify-center items-center active:bg-gray-300 cursor-pointer"
            htmlFor={"banner"}
          >
            {imgLoading ? (
              "Загрузка..."
            ) : banner ? (
              <div className="flex flex-col gap-1 items-center text-center">
                <CiImport size={50} />
                <span>Изменить</span>
              </div>
            ) : (
              <div className="flex flex-col gap-1 items-center text-center">
                <CiImport size={50} />
                <span>Загрузить баннер</span>
              </div>
            )}
          </label>
          <input
            className="hidden"
            type="file"
            placeholder="Загрузите изображение..."
            onChange={async (e) => {
              if (e.target.files) {
                await exportImg(
                  e.target.files[0],
                  undefined,
                  dispatch,
                  elements,
                  setImgLoading,
                  "add"
                );
              }
            }}
            id="banner"
          />
          {banner && (
            <img className="w-full lg:w-7/12" src={banner} alt="Изображение" />
          )}
        </div>
      </div>
      {elements.map((el, idx) => {
        if (el.type === "text") {
          return (
            <div className="flex items-start gap-5" key={idx}>
              <textarea
                className="p-3 leading-7 resize-none w-full min-h-[200px] rounded whitespace-pre-line"
                placeholder="Введите текст..."
                onChange={(e) =>
                  updateFieldChanged(idx, el.type, e.target.value)
                }
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
                onChange={(e) =>
                  updateFieldChanged(idx, el.type, e.target.value)
                }
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
                  {imgLoading ? (
                    "Загрузка..."
                  ) : el.src ? (
                    <div className="flex flex-col gap-1 items-center text-center">
                      <CiImport size={50} />
                      <span>Изменить</span>
                    </div>
                  ) : (
                    <CiImport size={50} />
                  )}
                </label>
                <input
                  className="hidden"
                  type="file"
                  placeholder="Загрузите изображение..."
                  onChange={async (e) => {
                    if (e.target.files) {
                      await exportImg(
                        e.target.files[0],
                        idx,
                        dispatch,
                        elements,
                        setImgLoading,
                        "add"
                      );
                    }
                  }}
                  id={id}
                />
                {el.src && <img src={el.src} alt="Изображение" />}
              </div>
              <MdDeleteForever
                onClick={async () => {
                  dispatch(
                    setElements(elements.filter((_, elIdx) => idx !== elIdx))
                  );

                  if (el.src) {
                    const data = await deleteImg(el.src);

                    console.log(data);

                    if (data) {
                      alert("Изображение удалено");
                    }
                  }
                }}
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
