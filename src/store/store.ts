import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { mainSlice } from "./slices/mainSlice";
import { headerSlice } from "./slices/headerSlice";
import { addArticleSlice } from "./slices/addArticleSlice";
import { userSlice } from "./slices/userSlice";
import { loadersSlice } from "./slices/loadersSlice";

const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
    user: userSlice.reducer,
    header: headerSlice.reducer,
    addArticle: addArticleSlice.reducer,
    loaders: loadersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
