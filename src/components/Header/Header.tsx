import React, { FC } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Burger from "./Burger";
import { AiOutlineSearch } from "react-icons/ai";
import Search from "./Search";
import Profile from "./Profile/Profile";
import { useAppSelector } from "../../store/store";
import MenuMob from "./MenuMob/MenuMob";

const Header: FC = () => {
  const isAuth = useAppSelector((state) => state.main.isAuth);

  return (
    <>
      <div className="py-5 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center gap-3 md:gap-10">
            <Logo />
            <div className="md:hidden flex items-center gap-3 ml-auto md:mr-2">
              <Link to="/search">
                <AiOutlineSearch
                  className="cursor-pointer"
                  size="25"
                  color="#3b82f6"
                />
              </Link>
              {!isAuth && <Burger />}
            </div>
            <div className="hidden md:flex w-full">
              <Search />
            </div>

            {isAuth ? (
              <>
                <Link
                  className="hidden md:flex text-sm whitespace-nowrap"
                  to="/add-article"
                >
                  Написать статью
                </Link>

                <Profile />
              </>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Link
                  to="/auth/reg"
                  className="flex justify-center items-center bg-blue-500 text-slate-100 rounded py-3 px-4 min-h-[49px] active:scale-[0.98] ease-linear duration-200"
                >
                  Зарегистрироваться
                </Link>
                <Link
                  to="/auth/login"
                  className="flex justify-center items-center bg-blue-500 text-slate-100 rounded py-3 px-4 min-h-[49px] active:scale-[0.98] ease-linear duration-200"
                >
                  Войти
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <MenuMob />
    </>
  );
};

export default Header;
