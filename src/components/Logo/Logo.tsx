import { FC } from "react";
import { Link } from "react-router-dom";

export const Logo: FC = () => {
  return (
    <Link className="font-medium text-blue-500 uppercase" to="/all">
      Koconta
      <br />
      <span className="font-normal text-sm text-blue-300 normal-case">
        articles
      </span>
    </Link>
  );
};
