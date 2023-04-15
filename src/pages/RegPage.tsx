import React, { FC, useState } from "react";
import LoaderAuth from "../components/Auth/LoaderAuth";
import axios from "axios";
import { useAppDispatch } from "../store/store";
import { setIsAuth } from "../store/slices/mainSlice";
import { useNavigate } from "react-router-dom";

const RegPage: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onPasswordRepeatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordRepeat(e.target.value);
  };

  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    axios.post(import.meta.env.VITE_PROXY + "/auth/reg", { email, userName, password, passwordRepeat }).then((res) => {
      localStorage.setItem("user", JSON.stringify({ userInfo: res.data.userInfo, token: res.data.token }));
      dispatch(setIsAuth(true));

      alert(res.data.message);

      navigate("/");
    }).catch((err) => {
      alert(err.response.data.message);
      setEmail("");
      setUserName("");
      setPassword("");
      setPasswordRepeat("");
    });

    setIsLoading(false);
  };

  return (
    <div className="mt-10">
      <div className="container mx-auto px-4">
        <form className="w-full rounded p-3 bg-slate-100 max-w-[400px] mx-auto" onSubmit={formHandler}>
          <h1 className="text-center font-medium">Регистрация</h1>
          <div className="mt-5 flex flex-col gap-3">
            <input
              className="px-3 py-2 rounded text-sm placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="Email..."
              onChange={onEmailChange}
              value={email}
            />
            <input
              className="px-3 py-2 rounded text-sm placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="Имя пользователя..."
              onChange={onUserNameChange}
              value={userName}
            />
            <input
              className="px-3 py-2 rounded text-sm placeholder:text-sm placeholder:font-light"
              type="password"
              placeholder="Пароль..."
              onChange={onPasswordChange}
              value={password}
            />
            <input
              className="px-3 py-2 rounded text-sm placeholder:text-sm placeholder:font-light"
              type="password"
              placeholder="Повторите пароль..."
              onChange={onPasswordRepeatChange}
              value={passwordRepeat}
            />
          </div>
          <button className="flex items-center gap-2 justify-center w-full bg-blue-500 text-white rounded px-3 py-2 mt-5">
            Зарегистрироваться
            {
              isLoading && <LoaderAuth />
            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegPage;
