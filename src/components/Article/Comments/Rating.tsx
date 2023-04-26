import React, { FC, useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { setRating } from '../../../store/slices/CommentSlice';

const Rating: FC = () => {
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const rating = useAppSelector((state) => state.comment.rating);
  const dispatch = useAppDispatch();
  const stars = [];

  const onStarFocus = (rating: number) => {
    setHoveredRating(rating)
  }

  console.log(rating);

  return (
    <div className="flex items-center gap-2">
      {
        [...Array(5)].map((star, idx) => {
          return <AiFillStar className={`${(hoveredRating >= idx + 1 || idx + 1 <= rating) ? "text-yellow-500" : "text-slate-400"} cursor-pointer ease-linear duration-200`} size={25} onMouseEnter={() => onStarFocus(idx + 1)} onMouseLeave={() => setHoveredRating(0)} onClick={() => dispatch(setRating(idx + 1))} />
        })
      }
    </div>
  );
};

export default Rating;