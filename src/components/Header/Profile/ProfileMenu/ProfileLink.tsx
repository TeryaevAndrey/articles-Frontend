import React, { FC } from "react";
import { Link } from "react-router-dom";

interface IProfileLink {
  href: string;
  title: string;
}

const ProfileLink: FC<IProfileLink> = ({ href, title }) => {
  return (
    <Link
      className="p-2 border-b border-gray-300 border-solid w-full lg:hover:bg-gray-200 ease-linear duration-200 active:bg-gray-200"
      to={href}
    >
      {title}
    </Link>
  );
};

export default ProfileLink;
