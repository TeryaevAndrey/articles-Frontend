import axios from "axios";

const addArticleToFavourite = async (articleId: string) => {
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
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export default addArticleToFavourite;
