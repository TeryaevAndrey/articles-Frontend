import React, { FC } from "react";
import { Link } from "react-router-dom";

interface IPopularLink {
  title: string;
}

const PopularLink: FC<IPopularLink> = ({title}) => {
  return (
    <Link
      to="/"
      className="text-sm p-3 border-b border-gray-200 border-solid active:opacity-001 ease-linear duration-75 lg:hover:bg-slate-200"
    >
      {title}
    </Link>
  );
};

export default PopularLink;
