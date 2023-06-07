import { FC } from "react";

interface IProfile {
  avatar: string | undefined;
  userName: string;
}

export const ArticleProfile: FC<IProfile> = ({ avatar, userName }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        className="w-10 h-10 rounded-full object-cover"
        src={avatar}
        alt="avatar"
      />
      <p className="text-gray-600">{userName}</p>
    </div>
  );
};
