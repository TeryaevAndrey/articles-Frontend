import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { setPopularTags } from "../store/slices/popularTagsSlice";

const getPopularTags = async (dispatch: Dispatch) => {
  await axios
    .get(import.meta.env.VITE_PROXY + "/get-popular-tags")
    .then((res: AxiosResponse) => {
      dispatch(setPopularTags(res.data.tags));
    })
    .catch((err) => {
      console.log(err.response.data.message);
    });
};

export default getPopularTags;
