import { Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth";

export const useRoutes = (isAuth: boolean) => {
  return isAuth ? (
    <div></div>
  ) : (
    <Routes>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};
