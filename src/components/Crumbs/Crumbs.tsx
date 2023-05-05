import React, { FC } from "react";
import { Link } from "react-router-dom";

interface ICrumbs {
  way: {
    title: string;
    href: string;
  }[];
}

const Crumbs: FC<ICrumbs> = ({ way }) => {
  return (
    <div className="flex items-center text-gray-300 font-light">
      <Link
        className="relative after:content-['/'] after:absolute after:-right-1 pr-5 hover:text-gray-400 ease-linear duration-200"
        to="/"
      >
        Главная
      </Link>

      {way.map((el, idx) => {
        return (
          <Link
            className="relative [&:not:last-child]after:content-['/'] after:absolute after:right-0 px-5 hover:text-gray-400 ease-linear duration-200"
            key={idx}
            to={el.href}
          >
            {el.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Crumbs;
