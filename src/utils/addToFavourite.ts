import axios, { AxiosResponse } from "axios";

const addToFavourite = async (articleId: string)  => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;

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
      return true;
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export default addToFavourite;
