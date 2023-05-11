import React, { FC } from "react";
import Social from "../Social/Social";
import { AiFillGithub } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Footer: FC = () => {
  return (
    <div className="border-t border-gray-200 border-solid py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-7 justify-between items-center">
          <p>Created by Teryaev Andrey</p>
          <div className="flex items-center gap-5 flex-wrap">
            <Social
              href="https://github.com/TeryaevAndrey"
              Icon={AiFillGithub}
            />
            <Social href="https://t.me/teryaev2004" Icon={FaTelegram} />
            <Social href="https://teryaevandrey.vercel.app" Icon={CgWebsite} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
