import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ArticlePage from "../pages/ArticlePage";
import RegPage from "../pages/RegPage";
import LoginPage from "../pages/LoginPage";

export const useRoutes = (isAuth: boolean) => {
  return isAuth ? (
    <div></div>
  ) : (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth/reg" element={<RegPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/articles/:articleId" element={<ArticlePage />} />
    </Routes>
  );
};
