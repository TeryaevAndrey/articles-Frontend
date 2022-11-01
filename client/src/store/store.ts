import { ArticleSlice } from "./ArticleSlice";
import { MainSlice } from "./MainSlice";
import { RegSlice } from "./RegSlice";
import { HeaderSlice } from "./HeaderSlice";
import { configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "./LoginSlice";
import { searchSlice } from "./SearchSlice";

export const store = configureStore({
  reducer: {
    main: MainSlice.reducer,
    header: HeaderSlice.reducer,
    reg: RegSlice.reducer,
    login: LoginSlice.reducer,
    article: ArticleSlice.reducer,
    search: searchSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;