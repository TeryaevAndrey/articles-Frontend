import React, { FC } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Burger from "./Burger";
import { AiOutlineSearch } from "react-icons/ai";
import Search from "./Search";

const Header: FC = () => {
  const isAuth = false;

  return (
    <>
      {isAuth ? (
        <div></div>
      ) : (
        <div className="py-5 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center gap-10">
              <Logo />
              <div className="lg:hidden flex items-center gap-3">
                <AiOutlineSearch className="cursor-pointer" size="25" color="#3b82f6" />
                <Burger />
              </div>
              <div className="hidden lg:flex w-full">
                <Search />
              </div>
              <div className="hidden lg:flex items-center gap-2">
                <button className="bg-blue-500 text-slate-100 rounded py-3 px-4 min-h-[49px]">
                  Зарегистрироваться
                </button>
                <button className="bg-blue-500 text-slate-100 rounded py-3 px-4 min-h-[49px]">
                  Войти
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
