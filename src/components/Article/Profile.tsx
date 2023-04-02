import React, { FC } from "react";

const Profile: FC = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        className="w-10 h-10 rounded-full object-cover"
        src="https://w7.pngwing.com/pngs/799/987/png-transparent-computer-icons-avatar-social-media-blog-font-awesome-avatar-heroes-computer-wallpaper-social-media.png"
        alt="avatar"
      />
      <p className="text-gray-400">username</p>
    </div>
  );
};

export default Profile;
