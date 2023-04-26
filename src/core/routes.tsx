import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ArticlePage from "../pages/ArticlePage";
import RegPage from "../pages/RegPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import AddArticlePage from "../pages/AddArticlePage";
import SearchPage from "../pages/SearchPage";
import EditProfilePage from "../pages/EditProfilePage";

export const useRoutes = (isAuth: boolean) => {
  return isAuth ? (
    <Routes>
      <Route path="/all/:page?" element={<MainPage />} />
      <Route path="*" element={<Navigate to="/all" replace />} />
      <Route path="/auth/reg" element={<RegPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/articles/:articleId" element={<ArticlePage />} />
      <Route path="/my-articles/:page?" element={<ProfilePage />} />
      <Route path="/add-article" element={<AddArticlePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/edit-profile" element={<EditProfilePage />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth/reg" element={<RegPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/articles/:articleId" element={<ArticlePage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
};
