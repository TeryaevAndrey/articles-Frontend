import Main from "./pages/Main/Main";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Reg from "./pages/Reg/Reg";
import Profile from "./pages/Profile/Profile";
import AddArticle from "./pages/AddArticle/AddArticle";

export function useRoutes(isAuth: boolean) {
  if (isAuth) {
    return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add" element={<AddArticle />} />
        <Route path="*" element={<Auth />} />
      </Routes>
    )
  }
  return(
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="*" element={<Auth />} />
      </Routes>
  );
}
