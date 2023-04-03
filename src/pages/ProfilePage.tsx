import React, { FC } from "react";
import Pagination from "../components/Pagination/Pagination";
import MyArticle from "../components/Article/MyArticle";

const ProfilePage: FC = () => {
  return (
    <div className="py-5">
      <div className="container mx-auto px-4">
        <h1 className="text-lg font-medium">Мои статьи</h1>
        <div className="mt-5">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 lg:mt-0">
            <MyArticle />
            <MyArticle />
            <MyArticle />
          </div>
          <div className="mt-12 flex justify-center">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
