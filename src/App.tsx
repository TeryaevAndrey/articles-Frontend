import React, { FC } from "react";
import Layout from "./components/Layout";
import { useRoutes } from "./core/routes";
import { useAppDispatch, useAppSelector } from "./store/store";
import { useNavigate } from "react-router-dom";
import checkToken from "./utils/checkToken";
import { setIsAuth } from "./store/slices/mainSlice";

const App: FC = () => {
  const isAuth = useAppSelector((state) => state.main.isAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const check = async () => {
      const isDeadToken = await checkToken();

      console.log(isDeadToken);

      if (isDeadToken) {
        dispatch(setIsAuth(false));
        localStorage.removeItem("user");
        navigate("/");
      }

      if (!isDeadToken && localStorage.getItem("user")) {
        dispatch(setIsAuth(true));
      }
    };

    check();

    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      {isLoading ? <div></div> : <Layout>{useRoutes(isAuth)}</Layout>}
    </div>
  );
};

export default App;
