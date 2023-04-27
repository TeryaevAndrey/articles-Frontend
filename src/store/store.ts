import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { mainSlice } from "./slices/mainSlice";
import { headerSlice } from "./slices/headerSlice";
import { addArticleSlice } from "./slices/addArticleSlice";
import { userSlice } from "./slices/userSlice";
import { loadersSlice } from "./slices/loadersSlice";
import { myArticlesSlice } from "./slices/myArticlesSlice";
import { openedArticleSlice } from "./slices/openedArticleSlice";
import { allArticlesSlice } from "./slices/allArticlesSlice";
import { addCommentSlice } from "./slices/addCommentSlice";

const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
    user: userSlice.reducer,
    header: headerSlice.reducer,
    addArticle: addArticleSlice.reducer,
    loaders: loadersSlice.reducer,
    myArticles: myArticlesSlice.reducer,
    allArticles: allArticlesSlice.reducer,
    openedArticle: openedArticleSlice.reducer,
    comment: addCommentSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
