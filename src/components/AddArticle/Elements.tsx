import React, { FC, useState, useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { MdDeleteForever } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { CiImport } from "react-icons/ci";
import { setElements } from "../../store/slices/addArticleSlice";
import axios from "axios";

const Elements: FC = () => {
  const elements = useAppSelector((state) => state.addArticle.elements);
  const dispatch = useAppDispatch();
  const [imgLoading, setImgLoading] = useState<boolean>(false);
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;

  const updateFieldChanged = (idx: number, type: string, value: string) => {
    let newArr = [...elements];
    newArr[idx] = { type, value };

    dispatch(setElements(newArr));
  }

  const exportImg = async (img: File, idx: number) => {
    setImgLoading(true);

    const formData = new FormData();

    formData.append("img", img!);

    await axios.post(import.meta.env.VITE_PROXY + "/img-processing", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      let newElements = [...elements];
      newElements[idx] = { type: "img", src: res.data.img };

      dispatch(setElements(newElements));
    }).catch((err) => {
      alert(err.response.data.message);
    });

    setImgLoading(false);
  }

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
                  {
                    imgLoading ? (
                      "Загрузка..."
                    ) : (
                      el.src ? (
                        <div className="flex flex-col gap-1 items-center text-center">
                          <CiImport size={50} />
                          <span>Изменить</span>
                        </div>
                      ) : <CiImport size={50} />
                    )
                  }
                </label>
                <input
                  className="hidden"
                  type="file"
                  placeholder="Загрузите изображение..."
                  onChange={(e) => {
                    if (e.target.files) {
                      exportImg(e.target.files[0], idx);
                    }
                  }}
                  id={id}
                />
                {
                  el.src && (
                    <img src={el.src} alt="Изображение" />
                  )
                }
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
