import { FC, useState, ChangeEvent, useEffect } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../store/store";
import { deleteImg, getMyData } from "@/utils";
import { FieldEditProfile } from "@/components";
import { user } from "@/store/slices/userSlice";

const EditProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(user).myData;
  const [avatar, setAvatar] = useState<string | File>(
    userData.avatar || "../../public/img/avatar.png"
  );
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [oldPassword, setOldPassword] = useState<string>("");

  const onAvatarChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setAvatar(e.target.files[0]);
    }
  };

  const onUserNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserName(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const onOldPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setOldPassword(e.target.value);
  };

  const formHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("avatar", avatar);
    formData.append("userName", userName);
    formData.append("password", password);
    formData.append("oldPassword", oldPassword);

    await axios
      .post(import.meta.env.VITE_PROXY + "/edit-profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        alert(res.data.message);

        if (typeof avatar !== "string") {
          if (
            userData.avatar !== res.data.user.avatar &&
            userData.avatar !== undefined
          ) {
            deleteImg(userData.avatar);
          }
        }

        dispatch(getMyData());
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="py-5">
      <div className="container mx-auto px-4">
        <form
          className="flex flex-col items-center md:flex-row md:items-start gap-16"
          onSubmit={formHandler}
          encType="multipart/form-data"
        >
          <div>
            <input
              className="hidden"
              type="file"
              id="avatar"
              onChange={onAvatarChange}
            />
            <label
              className="cursor-pointer text-center flex flex-col justify-center gap-5"
              htmlFor="avatar"
            >
              <img
                className="max-w-[320px] w-full h-auto rounded-full bg-slate-200"
                src={
                  typeof avatar === "string"
                    ? avatar
                    : URL.createObjectURL(avatar)
                }
                alt={userData.userName}
              />
              <span className="text-blue-600">Изменить аватар</span>
            </label>
          </div>
          <div className="flex flex-col gap-5">
            <FieldEditProfile
              type="text"
              placeholder="Имя пользователя"
              onChange={onUserNameChange}
              value={userName}
            />
            <div className="flex items-center gap-5">
              <FieldEditProfile
                type="password"
                placeholder="Пароль"
                onChange={onPasswordChange}
                value={password}
              />
              <FieldEditProfile
                type="password"
                placeholder="Старый пароль"
                onChange={onOldPasswordChange}
                value={oldPassword}
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
