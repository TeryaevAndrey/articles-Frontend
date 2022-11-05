import { ArticleSlice } from "./ArticleSlice";
import { MainSlice } from "./MainSlice";
import { RegSlice } from "./RegSlice";
import { HeaderSlice } from "./HeaderSlice";
import { configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "./LoginSlice";
import { searchSlice } from "./SearchSlice";
import { EditSlice } from "./EditSlice";

export const store = configureStore({
  reducer: {
    main: MainSlice.reducer,
    header: HeaderSlice.reducer,
    reg: RegSlice.reducer,
    login: LoginSlice.reducer,
    article: ArticleSlice.reducer,
    search: searchSlice.reducer,
    edit: EditSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;