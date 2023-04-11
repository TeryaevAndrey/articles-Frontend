import React, { FC } from "react";
import Crumbs from "../components/Crumbs/Crumbs";
import FieldEditProfile from "../components/EditProfile/FieldEditProfile";

const EditProfilePage: FC = () => {
  return (
    <div className="py-5">
      <div className="container mx-auto px-4">
        <form className="flex items-start gap-16">
          <div className="w-80 h-80 rounded-full bg-slate-200"></div>
          <div className="flex flex-col gap-5">
            <FieldEditProfile
              type="text"
              placeholder="Имя пользователя"
              onChange={() => console.log("asd")}
              value={"asd"}
            />
            <FieldEditProfile
              type="text"
              placeholder="Email"
              onChange={() => console.log("asd")}
              value={"asd"}
            />
            <div className="flex items-center gap-5">
              <FieldEditProfile
                type="password"
                placeholder="Пароль"
                onChange={() => console.log("asd")}
                value={"asd"}
              />
              <FieldEditProfile
                type="password"
                placeholder="Повторите пароль"
                onChange={() => console.log("asd")}
                value={"asd"}
              />
            </div>
            <button
              className="bg-green-500 hover:bg-green-600 rounded px-4 py-2 text-white duration-200 active:opacity-[0.7] ease-linear"
              type="submit"
            >
              Сохранить изменения
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
