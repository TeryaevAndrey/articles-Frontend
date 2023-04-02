import React, { FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setSearchValue } from "../../store/slices/headerSlice";

const Search: FC = () => {
  const searchValue = useAppSelector((state) => state.header.searchValue);
  const dispatch = useAppDispatch();

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <form className="w-full">
      <div className="w-full rounded bg-slate-100 px-4 py-3 flex items-center gap-3">
        <AiOutlineSearch
          className={`opacity-[0.5]`}
          size={25}
          color="#3b82f6"
        />
        <input
          className="w-full bg-transparent text-gray-600"
          type="text"
          placeholder="Поиск..."
          onChange={onSearchChange}
          value={searchValue}
        />
        {searchValue.length > 0 && (
          <MdClose
            className={`cursor-pointer`}
            size={25}
            color="#3b82f6"
            onClick={() => dispatch(setSearchValue(""))}
          />
        )}
      </div>
    </form>
  );
};

export default Search;
