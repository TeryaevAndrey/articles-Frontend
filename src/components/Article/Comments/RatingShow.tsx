import React, { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';

interface IRatingShow {
  rating: number;
}

const RatingShow: FC<IRatingShow> = ({ rating }) => {
  return (
    <div className="flex items-center gap-2">
      {
        [...Array(5)].map((star, idx) => {
          return <AiFillStar key={idx} className={`${(rating >= idx + 1 || idx + 1 <= rating) ? "text-yellow-500" : "text-slate-400"} cursor-pointer ease-linear duration-200`} size={25} />
        })
      }
    </div>
  );
};

export default RatingShow;