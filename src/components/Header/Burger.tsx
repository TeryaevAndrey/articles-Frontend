import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { header, setIsOpenMenu } from "../../store/slices/headerSlice";

export const Burger: FC = () => {
  const dispatch = useAppDispatch();
  const { isOpenMenu } = useAppSelector(header);

  return (
    <div
      className="relative block w-8 cursor-pointer"
      onClick={() => dispatch(setIsOpenMenu(!isOpenMenu))}
    >
      <span
        className={`absolute block top-[50%] translate-y-[-50%] w-full h-[2px] bg-blue-500 before:content-[''] before:block before:absolute before:w-full before:h-[2px] before:bg-blue-500 before:-top-2 after:content-[''] after:block after:absolute after:w-full after:h-[2px] after:bg-blue-500 after:-bottom-2`}
      ></span>
    </div>
  );
};
