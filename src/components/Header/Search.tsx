import React, { FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const Search: FC = () => {
  return (
    <form className="w-full">
      <div className="w-full rounded bg-slate-100 px-4 py-3 flex items-center gap-3">
        <AiOutlineSearch
          className={`opacity-[0.5]`}
          size={25}
          color="#3b82f6"
        />
        <input className="w-full bg-transparent text-gray-600" type="text" />
        <MdClose className={`cursor-pointer`} size={25} color="#3b82f6" />
      </div>
    </form>
  );
};

export default Search;
