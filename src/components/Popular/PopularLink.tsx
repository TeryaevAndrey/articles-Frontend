import React, { FC } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

interface IPopularLink {
  title: string;
  beforeUrl: string;
}

const PopularLink: FC<IPopularLink> = ({ title, beforeUrl }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentUrl = window.location.href;

  return (
    <Link
      to={
        currentUrl.includes("?q=")
          ? `?q=${searchParams.get("q")}&tag=${title}`
          : `${beforeUrl}?tag=${title}`
      }
      className="text-sm p-3 border-b border-gray-200 border-solid active:opacity-001 ease-linear duration-75 lg:hover:bg-slate-200"
    >
      {title}
    </Link>
  );
};

export default PopularLink;
