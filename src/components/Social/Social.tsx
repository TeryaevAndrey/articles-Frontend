import { FC } from "react";
import { IconType } from "react-icons/lib";
import { Link } from "react-router-dom";

interface ISocial {
  href: string;
  Icon: IconType;
}

export const Social: FC<ISocial> = ({ href, Icon }) => {
  return (
    <Link
      to={href}
      className="w-12 h-12 border border-blue-500 border-solid rounded flex justify-center items-center"
    >
      <Icon size={30} />
    </Link>
  );
};
