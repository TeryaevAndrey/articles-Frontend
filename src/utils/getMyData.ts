import axios from "axios";
import { AppDispatch } from "../store/store";
import { setMyData } from "../store/slices/userSlice";
import { setLoadingProfileHeader } from "../store/slices/loadersSlice";

export const getMyData =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    dispatch(setLoadingProfileHeader());

    const token = JSON.parse(localStorage.getItem("user") || "{}").token;

    await axios
      .get(import.meta.env.VITE_PROXY + "/get-my-data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(
          setMyData({
            avatar: res.data.user.avatar,
            userName: res.data.user.userName,
          })
        );
      })
      .catch((err) => {
        alert(err.response.data.message);
      });

    dispatch(setLoadingProfileHeader());
  };
