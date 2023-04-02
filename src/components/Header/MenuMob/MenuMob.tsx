import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../store/store";

const MenuMob: FC = () => {
  const isOpenMenu = useAppSelector((state) => state.header.isOpenMenu);

  return (
    <div
      className={`flex md:hidden fixed ${
        isOpenMenu ? "top-[77px] opacity-1" : "-top-full opacity-0"
      } w-screen h-[calc(100vh-77px)] ease-linear duration-100 bg-slate-100 z-10`}
    >
      <div className="container mx-auto px-4">
        <div className="py-6">
          <div className="flex md:hidden justify-center items-center gap-2">
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
        </div>
      </div>
    </div>
  );
};

export default MenuMob;
