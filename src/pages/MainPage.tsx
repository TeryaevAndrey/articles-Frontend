import React, { FC } from "react";
import { Link } from "react-router-dom";
import Popular from "../components/Popular/Popular";

const MainPage: FC = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-start">
          <Popular />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
