import { FC, ChangeEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { header, setSearchValue } from "../../store/slices/headerSlice";
import { useNavigate } from "react-router-dom";

export const Search: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { searchValue } = useAppSelector(header);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <form className="w-full">
      <div className="w-full rounded bg-slate-100 px-4 py-3 flex items-center gap-3 max-h-[49px]">
        <AiOutlineSearch
          className={`opacity-[0.5]`}
          size={25}
          color="#3b82f6"
        />
        <input
          className="w-full bg-transparent text-gray-600"
          type="text"
          placeholder="Введите запрос..."
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

        <button
          className="bg-blue-500 rounded px-4 py-2 text-white duration-200 active:opacity-[0.7] ease-linear"
          onClick={(e) => {
            e.preventDefault();

            navigate(`/search?q=${searchValue}`);
          }}
        >
          Найти
        </button>
      </div>
    </form>
  );
};
