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
            _id: res.data.user._id,
            avatar: res.data.user.avatar,
            userName: res.data.user.userName,
            createdAt: res.data.user.createdAt,
            updatedAt: res.data.user.updatedAt,
          })
        );
      })
      .catch((err) => {
        alert(err.response.data.message);
      });

    dispatch(setLoadingProfileHeader());
  };
