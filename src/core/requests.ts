const proxy = import.meta.env.VITE_PROXY;

export const requests = {
  getAllFavouritesArticles: proxy + "/get-all-favourites-articles",
  deleteImg: proxy + "/delete-img",
  deleteArticle: proxy + "/delete-article", // /:articleId
  deleteComment: proxy + "/delete-comment" // /:commentId
};
