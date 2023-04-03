import React, { FC } from "react";
import Layout from "./components/Layout";
import { useRoutes } from "./core/routes";
import { useAppSelector } from "./store/store";

const App: FC = () => {
  const isAuth = useAppSelector((state) => state.main.isAuth);

  return (
    <div className="App">
      <Layout>{useRoutes(isAuth)}</Layout>
    </div>
  );
};

export default App;
