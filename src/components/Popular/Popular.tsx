import React, { FC } from "react";
import PopularLink from "./PopularLink";

const Popular: FC = () => {
  return (
    <div className="flex bg-slate-100 rounded w-full shadow py-4 mt-4">
      <div className="w-full">
        <h2 className="text-center font-medium">Популярные темы</h2>

        <div className="flex flex-col mt-3">
          <PopularLink />
          <PopularLink />
          <PopularLink />
          <PopularLink />
        </div>
        <div className="text-center font-light mt-4 text-sm cursor-pointer active:opacity-001 ease-linear duration-75">
          Показать еще
        </div>
      </div>
    </div>
  );
};

export default Popular;
