import React, { FC } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Burger from "./Burger";

const Header: FC = () => {
  const isAuth = false;

  return (
    <>
      {isAuth ? (
        <div></div>
      ) : (
        <div className="py-5 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <Logo />
              <Burger />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
