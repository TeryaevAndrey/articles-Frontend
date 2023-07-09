import { FC, useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { header, setIsOpenMenu } from "../../../store/slices/headerSlice";
import { ProfileMenu } from "@/components";
import { user } from "@/store/slices/userSlice";
import { loaders } from "@/store/slices/loadersSlice";

export const Profile: FC = () => {
  const dispatch = useAppDispatch();
  const { isOpenMenu } = useAppSelector(header);
  const isLoading = useAppSelector(loaders).loadingProfileHeader;
  const { myData } = useAppSelector(user);
  const [avatar, setAvatar] = useState<string | undefined>(myData.avatar);

  useEffect(() => {
    setAvatar(myData.avatar);
  }, [myData]);

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2 w-max cursor-pointer"
        onClick={() => dispatch(setIsOpenMenu(!isOpenMenu))}
      >
        <div className="flex items-center gap-1.5">
          {isLoading ? (
            <div>Загрузка...</div>
          ) : (
            <>
              <img
                className="w-10 h-10 rounded-md bg-gray-300 object-cover"
                src={avatar}
                alt={myData.userName}
                onError={() => {
                  setAvatar("../../../../public/img/avatar.png");
                }}
              />
              <div className="text-gray-600">{myData.userName}</div>
            </>
          )}
        </div>
        <AiFillCaretDown
          className={`${isOpenMenu && "rotate-180"}`}
          size={10}
          color="#3b82f6"
        />
      </div>

      {isOpenMenu && <ProfileMenu />}
    </div>
  );
};
