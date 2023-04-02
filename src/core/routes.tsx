import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import MainPage from "../pages/MainPage";
import ArticlePage from "../pages/ArticlePage";

export const useRoutes = (isAuth: boolean) => {
  return isAuth ? (
    <div></div>
  ) : (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/articles/:articleId" element={<ArticlePage />} />
    </Routes>
  );
};
