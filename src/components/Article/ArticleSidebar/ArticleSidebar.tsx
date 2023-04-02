import React, { FC } from "react";
import Profile from "../Profile";
import Popular from "../../Popular/Popular";

const ArticleSidebar: FC = () => {
  return (
    <div className="bg-slate-100 rounded w-full h-max lg:gap-x-10 shadow p-3">
      <div className="w-full flex flex-col gap-3">
        <Profile />
        <div>
          <div className="flex items-center gap-3">
            <p className="text-gray-300 text-sm">Дата создания:</p>
            <p>11.12.1993</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSidebar;
