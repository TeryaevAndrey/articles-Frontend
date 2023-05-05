import React, { FC, useState, useEffect } from "react";
import Layout from "./components/Layout";
import { useRoutes } from "./core/routes";
import { useAppDispatch, useAppSelector } from "./store/store";
import { useNavigate } from "react-router-dom";
import checkToken from "./utils/checkToken";
import { setIsAuth } from "./store/slices/mainSlice";
import getMyData from "./utils/getMyData";

const App: FC = () => {
  const isAuth = useAppSelector((state) => state.main.isAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const check = async () => {
      const isDeadToken = await checkToken();

      if (isDeadToken) {
        dispatch(setIsAuth(false));
        localStorage.removeItem("user");
        navigate("/");
      }

      if (!isDeadToken && localStorage.getItem("user")) {
        dispatch(setIsAuth(true));
        if (isAuth) {
          dispatch(getMyData());
        }
      }
    };

    check();

    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isAuth) {
      dispatch(getMyData());
    }
  }, [isAuth]);

  return (
    <div className="App">
      {isLoading ? (
        <div>Загрузка, подождите...</div>
      ) : (
        <Layout>{useRoutes(isAuth)}</Layout>
      )}
    </div>
  );
};

export default App;
