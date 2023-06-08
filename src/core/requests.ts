const proxy = import.meta.env.VITE_PROXY;

export const requests = {
  getAllFavouritesArticles: proxy + "/get-all-favourites-articles",
};
