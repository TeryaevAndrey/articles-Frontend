import React, { FC } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

const Profile: FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div className="text-gray-600">username</div>
        </div>
        <AiFillCaretDown
          className={`${isOpen && "rotate-180"}`}
          size={10}
          color="#3b82f6"
        />
      </div>

      {isOpen && <ProfileMenu />}
    </div>
  );
};

export default Profile;
