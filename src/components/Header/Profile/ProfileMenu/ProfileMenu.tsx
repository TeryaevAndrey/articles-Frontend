import React, { FC } from "react";
import { Link } from "react-router-dom";
import ProfileLink from "./ProfileLink";

const ProfileMenu: FC = () => {
  return (
    <div className="absolute top-[130%] flex flex-col w-full max-w-[150px] bg-slate-100 truncate rounded overflow-hidden text-sm z-10">
      <ProfileLink title="Профиль" href="/profile/asdklasdk123" />
      <ProfileLink title="Добавить статью" href="/add-article" />
      <ProfileLink title="Избранное" href="/favourites" />

      <Link
        className="p-2 border-b border-gray-300 border-solid w-full text-red-400"
        to="/add-article"
      >
        Выйти
      </Link>
    </div>
  );
};

export default ProfileMenu;
