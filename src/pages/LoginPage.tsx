import { FC, useState, ChangeEvent, FormEvent } from "react";
import axios, { AxiosResponse } from "axios";
import { useAppDispatch } from "../store/store";
import { setIsAuth } from "../store/slices/mainSlice";
import { useNavigate } from "react-router-dom";
import { getMyData } from "@/utils";
import { Loader } from "@/components";

const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onUserNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserName(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const formHandler = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    setIsLoading(true);

    await axios
      .post(import.meta.env.VITE_PROXY + "/auth/login", { userName, password })
      .then((res: AxiosResponse) => {
        localStorage.setItem(
          "user",
          JSON.stringify({ userInfo: res.data.userInfo, token: res.data.token })
        );
        dispatch(setIsAuth(true));
        dispatch(getMyData());

        alert(res.data.message);

        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);

        setUserName("");
        setPassword("");
      });

    setIsLoading(false);
  };

  return (
    <div className="mt-10">
      <div className="container mx-auto px-4">
        <form
          className="w-full rounded p-3 bg-slate-100 max-w-[400px] mx-auto"
          onSubmit={formHandler}
        >
          <h1 className="text-center font-medium">Авторизоваться</h1>
          <div className="mt-5 flex flex-col gap-3">
            <input
              className="px-3 py-2 rounded text-sm placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="Имя пользователя"
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
          </div>
          <button className="flex items-center gap-2 justify-center w-full bg-blue-500 text-white rounded px-3 py-2 mt-5">
            Авторизоваться
            {isLoading && <Loader />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
