import axios from "axios";
import { AppDispatch } from "../store/store";
import { setMyData } from "../store/slices/userSlice";
import { setLoadingProfileHeader } from "../store/slices/loadersSlice";

const getMyData = () => async (dispatch: AppDispatch) => {
  dispatch(setLoadingProfileHeader(true));

  const token = JSON.parse(localStorage.getItem("user") || "{}").token;

  await axios
    .get(import.meta.env.VITE_PROXY + "/get-my-data", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(setMyData(res.data.user));
    })
    .catch((err) => {
      alert(err.response.data.message);
    });

  dispatch(setLoadingProfileHeader(false));
};

export default getMyData;
