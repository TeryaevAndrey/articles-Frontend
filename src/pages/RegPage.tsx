import React, { FC, useState } from "react";

const RegPage: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onPasswordRepeatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordRepeat(e.target.value);
  };

  return (
    <div className="mt-10">
      <div className="container mx-auto px-4">
        <form className="w-full rounded p-3 bg-slate-100 max-w-[400px] mx-auto">
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
              placeholder="Пароль..."
              onChange={onPasswordChange}
              value={password}
            />
            <input
              className="px-3 py-2 rounded text-sm placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="Повторите пароль..."
              onChange={onPasswordRepeatChange}
              value={passwordRepeat}
            />
          </div>
          <button className="w-full bg-blue-500 text-white rounded px-3 py-2 mt-5">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegPage;
