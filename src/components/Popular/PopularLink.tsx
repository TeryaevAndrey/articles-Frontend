import React, { FC } from "react";
import { Link } from "react-router-dom";

const PopularLink: FC = () => {
  return (
    <Link
      to="/"
      className="text-sm p-3 border-b border-gray-200 border-solid active:opacity-001 ease-linear duration-75 lg:hover:bg-slate-200"
    >
      Программирование
    </Link>
  );
};

export default PopularLink;
