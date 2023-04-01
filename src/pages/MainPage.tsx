import React, { FC } from "react";
import { Link } from "react-router-dom";

const MainPage: FC = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-start">
          <div className="flex bg-slate-100 rounded w-full shadow py-4 mt-4">
            <div className="w-full">
              <h2 className="text-center font-medium">Популярные темы</h2>

              <div className="flex flex-col mt-3">
                <Link to="/" className="text-sm p-3 border-b border-gray-200 border-solid active:opacity-001 ease-linear duration-75 hover:bg-slate-200">Программирование</Link>
                <Link to="/" className="text-sm p-3 border-b border-gray-200 border-solid active:opacity-001 ease-linear duration-75 hover:bg-slate-200">Книги</Link>
                <Link to="/" className="text-sm p-3 border-b border-gray-200 border-solid active:opacity-001 ease-linear duration-75 hover:bg-slate-200">Наука</Link>
              </div>
              <div className="text-center font-light mt-4 text-sm cursor-pointer active:opacity-001 ease-linear duration-75">Показать еще</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
