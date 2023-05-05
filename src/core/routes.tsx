import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ArticlePage from "../pages/ArticlePage";
import RegPage from "../pages/RegPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import AddArticlePage from "../pages/AddArticlePage";
import SearchPage from "../pages/SearchPage";
import EditProfilePage from "../pages/EditProfilePage";
import FavouritePage from "../pages/FavouritePage";
import EditArticlePage from "../pages/EditArticlePage";

export const useRoutes = (isAuth: boolean) => {
  return isAuth ? (
    <Routes>
      <Route path="/all/:page?" index element={<MainPage />} />
      <Route index element={<Navigate to="/all" />} />
      <Route path="/auth/reg" element={<RegPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/articles/:articleId" element={<ArticlePage />} />
      <Route path="/edit-article/:articleId" element={<EditArticlePage />} />
      <Route path="/my-articles/:page?" element={<ProfilePage />} />
      <Route path="/add-article" element={<AddArticlePage />} />
      <Route path="/favourite/:page?" element={<FavouritePage />} />
      <Route path="/search/:page?" element={<SearchPage />} />
      <Route path="/edit-profile" element={<EditProfilePage />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/all/:page?" index element={<MainPage />} />
      <Route index element={<Navigate to="/all" />} />
      <Route path="/auth/reg" element={<RegPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/articles/:articleId" element={<ArticlePage />} />
      <Route path="/search/:page?" element={<SearchPage />} />
    </Routes>
  );
};
