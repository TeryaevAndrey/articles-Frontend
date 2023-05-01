import axios, { AxiosResponse } from "axios";
import { IFavourite } from "../types";

const addToFavourite = async (articleId: string): Promise<{favourite: IFavourite, message: string} | undefined> => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;
  let result: {favourite: IFavourite, message: string} | undefined = undefined;

  await axios
    .post(
      import.meta.env.VITE_PROXY + "/add-to-favourite",
      { articleId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res: AxiosResponse) => {
      result = {
        favourite: res.data.favourite,
        message: res.data.message,
      };
    })
    .catch((err) => {
      console.log(err.response.data.message);
    });

  return result;
};

export default addToFavourite;
