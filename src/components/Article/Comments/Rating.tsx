import React, { FC, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { setRating } from "../../../store/slices/addCommentSlice";
import { useLocation } from "react-router-dom";

const Rating: FC = () => {
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const rating = useAppSelector((state) => state.comment.rating);
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setRating(0));
  }, [location]);

  const onStarFocus = (rating: number) => {
    setHoveredRating(rating);
  };

  return (
    <div className="flex items-center gap-2">
      {[...Array(5)].map((star, idx) => {
        return (
          <AiFillStar
            key={idx}
            className={`${
              hoveredRating >= idx + 1 || idx + 1 <= rating
                ? "text-yellow-500"
                : "text-slate-400"
            } cursor-pointer ease-linear duration-200`}
            size={25}
            onMouseEnter={() => onStarFocus(idx + 1)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => dispatch(setRating(idx + 1))}
          />
        );
      })}
    </div>
  );
};

export default Rating;
