import { requests } from "@/core/requests";
import axios from "axios";

export const deleteImg = async (imgUrl: string): Promise<boolean> => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;
  let result: boolean = false;

  await axios
    .post(
      requests.deleteImg,
      { imgUrl },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(() => {
      result = true;
    })
    .catch(() => {
      result = false;
    });

  return result;
};
