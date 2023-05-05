import React, { FC } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useLocation, useNavigate, useParams } from "react-router-dom";

interface IPagination {
  total: number;
  limit: number;
  currentPage: number;
}

const Pagination: FC<IPagination> = ({ total, limit, currentPage }) => {
  const { page } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  let totalPages = Math.ceil(total / limit);
  let pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalPages > 3) {
    if (currentPage === 1) {
      pages = pages.slice(0, 3);
    } else if (currentPage === totalPages) {
      pages = [totalPages - 2, totalPages - 1, totalPages];
    } else {
      pages = [currentPage - 1, currentPage, currentPage + 1];
    }
  }

  return (
    <div className="flex items-center gap-5">
      <AiOutlineLeft
        className="cursor-pointer"
        size={20}
        color="#3b82f6"
        onClick={() => {
          if (currentPage > 1) {
            navigate(
              "/" +
                location.pathname.split("/")[1] +
                "/page" +
                (page !== undefined ? Number(page?.slice(4)) - 1 : 1)
            );
          }
        }}
      />
      <div className="flex items-center gap-3">
        {pages.map((pageEl, idx) => {
          return (
            <button
              key={idx}
              className={`flex justify-center items-center rounded ${
                currentPage === pageEl ? "bg-blue-500" : "bg-blue-300"
              } text-white w-10 h-10`}
              onClick={() =>
                navigate(
                  "/" +
                    location.pathname.split("/")[1] +
                    "/page" +
                    pageEl +
                    `${window.location.search}`
                )
              }
            >
              {pageEl}
            </button>
          );
        })}
      </div>
      <AiOutlineRight
        className="cursor-pointer"
        size={20}
        color="#3b82f6"
        onClick={() => {
          if (currentPage < totalPages) {
            navigate(
              "/" +
                location.pathname.split("/")[1] +
                "/page" +
                (page !== undefined ? Number(page?.slice(4)) + 1 : 2)
            );
          }
        }}
      />
    </div>
  );
};

export default Pagination;
