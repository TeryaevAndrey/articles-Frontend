import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const MainPage = lazy(() => import("../pages/MainPage"));
const ArticlePage = lazy(() => import("../pages/ArticlePage"));
const RegPage = lazy(() => import("../pages/RegPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const AddArticlePage = lazy(() => import("../pages/AddArticlePage"));
const SearchPage = lazy(() => import("../pages/SearchPage"));
const EditProfilePage = lazy(() => import("../pages/EditProfilePage"));
const FavouritePage = lazy(() => import("../pages/FavouritePage"));
const EditArticlePage = lazy(() => import("../pages/EditArticlePage"));

export const useRoutes = (isAuth: boolean) => {
  return isAuth ? (
    <Routes>
      <Route
        path="/all/:page?"
        index
        element={
          <Suspense>
            <MainPage />
          </Suspense>
        }
      />
      <Route
        index
        element={
          <Suspense>
            <Navigate to="/all" />
          </Suspense>
        }
      />
      <Route
        path="/auth/reg"
        element={
          <Suspense>
            <RegPage />
          </Suspense>
        }
      />
      <Route
        path="/auth/login"
        element={
          <Suspense>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="/articles/:articleId"
        element={
          <Suspense>
            <ArticlePage />
          </Suspense>
        }
      />
      <Route
        path="/edit-article/:articleId"
        element={
          <Suspense>
            <EditArticlePage />
          </Suspense>
        }
      />
      <Route
        path="/my-articles/:page?"
        element={
          <Suspense>
            <ProfilePage />
          </Suspense>
        }
      />
      <Route
        path="/add-article"
        element={
          <Suspense>
            <AddArticlePage />
          </Suspense>
        }
      />
      <Route
        path="/favourite/:page?"
        element={
          <Suspense>
            <FavouritePage />
          </Suspense>
        }
      />
      <Route
        path="/search/:page?"
        element={
          <Suspense>
            <SearchPage />
          </Suspense>
        }
      />
      <Route
        path="/edit-profile"
        element={
          <Suspense>
            <EditProfilePage />
          </Suspense>
        }
      />
    </Routes>
  ) : (
    <Routes>
      <Route
        path="/all/:page?"
        index
        element={
          <Suspense>
            <MainPage />
          </Suspense>
        }
      />
      <Route
        index
        element={
          <Suspense>
            <Navigate to="/all" />
          </Suspense>
        }
      />
      <Route
        path="/auth/reg"
        element={
          <Suspense>
            <RegPage />
          </Suspense>
        }
      />
      <Route
        path="/auth/login"
        element={
          <Suspense>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="/articles/:articleId"
        element={
          <Suspense>
            <ArticlePage />
          </Suspense>
        }
      />
      <Route
        path="/search/:page?"
        element={
          <Suspense>
            <SearchPage />
          </Suspense>
        }
      />
    </Routes>
  );
};
