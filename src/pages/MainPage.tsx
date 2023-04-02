import React, { FC } from "react";
import { Link } from "react-router-dom";
import Popular from "../components/Popular/Popular";
import Article from "../components/Article/Article";

const MainPage: FC = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse lg:justify-start lg:gap-10 py-5">
          <div className="mt-4 lg:mt-0 w-full lg:w-[35%]">
            <Popular />
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 lg:mt-0">
            <Article />
            <Article />
            <Article />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
