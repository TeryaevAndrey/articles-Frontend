import React, { FC } from "react";
import FieldEditProfile from "../components/EditProfile/FieldEditProfile";
import axios from "axios";

const EditProfilePage: FC = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [avatar, setAvatar] = React.useState<string | File>(user.userInfo.avatar);
  const [userName, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [oldPassword, setOldPassword] = React.useState<string>("");

  const onAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAvatar(e.target.files[0]);
    }
  }

  const onUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const onOldPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldPassword(e.target.value);
  }

  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("avatar", avatar);
    formData.append("userName", userName);
    formData.append("password", password);
    formData.append("oldPassword", oldPassword);

    await axios.post(import.meta.env.VITE_PROXY + "/edit-profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.token}`
      }
    }).then((res) => {
      alert(res.data.message);
    }).catch((err) => {
      alert(err.response.data.message);
    })
  };

  return (
    <div className="py-5">
      <div className="container mx-auto px-4">
        <form className="flex items-start gap-16" onSubmit={formHandler} encType="multipart/form-data">
          <div>
            <input className="hidden" type="file" id="avatar" onChange={onAvatarChange} />
            <label className="cursor-pointer text-center flex flex-col justify-center gap-5" htmlFor="avatar">
              <img className="max-w-[320px] w-full h-auto rounded-full bg-slate-200" src={typeof avatar === "string" ? avatar : URL.createObjectURL(avatar)} alt={user.userInfo.userName} />
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
