import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import MainPage from "../pages/MainPage";

export const useRoutes = (isAuth: boolean) => {
  return isAuth ? (
    <div></div>
  ) : (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};
