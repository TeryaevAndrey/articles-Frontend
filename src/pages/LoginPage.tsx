import React, { FC } from "react";

const LoginPage: FC = () => {
  return (
    <div className="mt-10">
      <div className="container mx-auto px-4">
        <form className="w-full rounded p-3 bg-slate-100">
          <h1 className="text-center font-medium">Авторизоваться</h1>
          <div className="mt-5 flex flex-col gap-3">
            <input
              className="px-3 py-2 rounded text-sm placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="Email..."
            />
            <input
              className="px-3 py-2 rounded text-sm placeholder:text-sm placeholder:font-light"
              type="text"
              placeholder="Пароль..."
            />
          </div>
          <button className="w-full bg-blue-500 text-white rounded px-3 py-2 mt-5">
            Авторизоваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
