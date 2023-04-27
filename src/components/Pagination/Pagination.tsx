import React, { FC } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useAppDispatch } from "../../store/store";
import { useLocation, useNavigate } from "react-router-dom";

interface IPagination {
  total: number;
  limit: number;
  currentPage: number;
}

const Pagination: FC<IPagination> = ({ total, limit, currentPage }) => {
  const totalPages = Math.ceil(total / limit);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname.split("/")[1]);

  return (
    <div className="flex items-center gap-5">
      <AiOutlineLeft className="cursor-pointer" size={20} color="#3b82f6" />
      <div className="flex items-center gap-3">

        {
          pages.map((page, idx) => {
            return (
              <button
                key={idx}
                className={`flex justify-center items-center rounded ${currentPage === page ? "bg-blue-500" : "bg-blue-300"} text-white w-10 h-10`}
                onClick={() => navigate("/" + location.pathname.split("/")[1] + "/page" + page)}
              >
                {page}
              </button>
            )
          })
        }

      </div>
      <AiOutlineRight className="cursor-pointer" size={20} color="#3b82f6" />
    </div>
  );
};

export default Pagination;
