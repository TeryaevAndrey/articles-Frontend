import { FC, MouseEventHandler } from "react";
import { Link } from "react-router-dom";

interface IProfileLink {
  href: string;
  title: string;
  onClick?: MouseEventHandler;
}

export const ProfileLink: FC<IProfileLink> = ({ href, title, onClick }) => {
  return (
    <Link
      className="p-2 border-b border-gray-300 border-solid w-full lg:hover:bg-gray-200 ease-linear duration-200 active:bg-gray-200 truncate"
      to={href}
      onClick={onClick}
    >
      {title}
    </Link>
  );
};
