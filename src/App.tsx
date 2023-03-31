import React, { FC } from "react";
import Layout from "./components/Layout";
import { useRoutes } from "./core/routes";

const App: FC = () => {
  return (
    <div className="App">
      <Layout>{useRoutes(false)}</Layout>
    </div>
  );
};

export default App;
