import React, { FC } from "react";
import { Link } from "react-router-dom";
import ProfileLink from "./ProfileLink";
import { setIsOpenMenu } from "../../../../store/slices/headerSlice";
import { useAppDispatch } from "../../../../store/store";
import { setIsAuth } from "../../../../store/slices/mainSlice";

const ProfileMenu: FC = () => {
  const dispatch = useAppDispatch();

  const exitFromProfile = () => {
    localStorage.removeItem("user");

    dispatch(setIsAuth(false));
  }

  return (
    <div className="absolute top-[130%] flex flex-col w-full max-w-[150px] bg-slate-100 truncate rounded overflow-hidden text-sm z-10">
      <ProfileLink
        title="Профиль"
        href="/profile/asdklasdk123"
        onClick={() => dispatch(setIsOpenMenu(false))}
      />
      <ProfileLink
        title="Добавить статью"
        href="/add-article"
        onClick={() => dispatch(setIsOpenMenu(false))}
      />
      <ProfileLink
        title="Избранное"
        href="/favourites"
        onClick={() => dispatch(setIsOpenMenu(false))}
      />
      <ProfileLink
        title="Редактировать профиль"
        href="/edit-profile/asdjkasdjk"
        onClick={() => dispatch(setIsOpenMenu(false))}
      />

      <Link
        className="p-2 border-b border-gray-300 border-solid w-full text-red-400"
        to="/"
        onClick={exitFromProfile}
      >
        Выйти
      </Link>
    </div>
  );
};

export default ProfileMenu;
