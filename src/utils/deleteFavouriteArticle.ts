import axios, { AxiosResponse } from "axios";

export const deleteFavouriteArticle = async (
  favouriteId: string
): Promise<{ message: string; result: boolean } | undefined> => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;
  let result: { message: string; result: boolean } | undefined = undefined;

  await axios
    .post(
      import.meta.env.VITE_PROXY + "/delete-from-favourite",
      { _id: favouriteId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res: AxiosResponse) => {
      result = {
        message: res.data.message,
        result: true,
      };
    })
    .catch((err) => {
      result = {
        message: err.response.data.message,
        result: true,
      };

      alert(err.response.data.message);
    });

  return result;
};