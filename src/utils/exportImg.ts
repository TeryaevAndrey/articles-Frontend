import axios from "axios";
import { IElement } from "../types";
import { Dispatch } from "@reduxjs/toolkit";
import { setBanner, setElements } from "../store/slices/addArticleSlice";

const exportImg = async (
  img: File,
  idx: number | undefined,
  dispatch: Dispatch,
  elements: IElement[],
  setImgLoading: Function
): Promise<void> => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;
  const formData = new FormData();

  formData.append("img", img!);

  setImgLoading(true);

  await axios
    .post(import.meta.env.VITE_PROXY + "/img-processing", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (idx !== undefined) {
        let newElements = [...elements];
        newElements[idx] = { type: "img", src: res.data.img };

        dispatch(setElements(newElements));
      } else {
        dispatch(setBanner(res.data.img));
      }
    })
    .catch((err) => {
      alert(err.response.data.message);
    });

  setImgLoading(false);
};

export default exportImg;
