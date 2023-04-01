import React, { FC } from "react";
import { Link } from "react-router-dom";

const Logo: FC = () => {
  return (
    <Link className="font-medium text-blue-500 uppercase" to="/">
      Koconta
      <br />
      <span className="font-normal text-sm text-blue-300 normal-case">
        articles
      </span>
    </Link>
  );
};

export default Logo;
