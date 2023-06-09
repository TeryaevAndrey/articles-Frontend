import { Dispatch } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { setPopularTags } from "../store/slices/popularTagsSlice";
import { setLoadingPopularTags } from "@/store/slices/loadersSlice";

export const getPopularTags = async (dispatch: Dispatch): Promise<void> => {
  dispatch(setLoadingPopularTags(true));

  await axios
    .get(import.meta.env.VITE_PROXY + "/get-popular-tags")
    .then((res: AxiosResponse) => {
      dispatch(setPopularTags(res.data.tags));
      dispatch(setLoadingPopularTags(false));
    })
    .catch((err) => {
      console.log(err.response.data.message);
      dispatch(setLoadingPopularTags(false));
    });
};
