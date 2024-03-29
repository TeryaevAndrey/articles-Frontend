import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { header, setIsOpenMenu } from "../../../store/slices/headerSlice";
import { main } from "@/store/slices/mainSlice";

export const MenuMob: FC = () => {
  const dispatch = useAppDispatch();
  const { isOpenMenu } = useAppSelector(header);
  const { isAuth } = useAppSelector(main);

  return (
    <div
      className={`flex md:hidden fixed ${
        isOpenMenu && !isAuth ? "top-[77px] opacity-1" : "-top-full opacity-0"
      } w-screen h-[calc(100vh-77px)] ease-linear duration-100 bg-slate-100 z-10`}
    >
      <div className="container mx-auto px-4">
        <div className="py-6">
          <div className="flex md:hidden justify-center items-center gap-2">
            <Link
              to="/auth/reg"
              className="flex justify-center items-center bg-blue-500 text-slate-100 rounded py-3 px-4 min-h-[49px] active:scale-[0.98] ease-linear duration-200"
              onClick={() => dispatch(setIsOpenMenu(false))}
            >
              Зарегистрироваться
            </Link>
            <Link
              to="/auth/login"
              className="flex justify-center items-center bg-blue-500 text-slate-100 rounded py-3 px-4 min-h-[49px] active:scale-[0.98] ease-linear duration-200"
              onClick={() => dispatch(setIsOpenMenu(false))}
            >
              Войти
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
