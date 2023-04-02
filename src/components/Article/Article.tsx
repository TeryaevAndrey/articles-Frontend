import React, { FC } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Article: FC = () => {
  return (
    <div className="w-full rounded overflow-hidden">
      <div className="flex flex-col gap-3">
        <div className="w-full max-h-[210px] h-full">
          <img
            className="w-full h-full object-cover"
            src="https://img2.fonwall.ru/o/pp/vodopad-skaly-potok.jpg?route=mid&amp;h=750"
            alt="image"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-medium leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            perferendis.
          </h2>

          <p className="text-sm font-light text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            aspernatur aut, dolorum harum, quae omnis illo veniam nihil
            consequatur repellendus, pariatur voluptatibus sapiente perferendis
            facere...
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <AiOutlineEye size={15} />
              <p className="text-sm text-gray-300 font-light">просмотров</p>
            </div>
            <Link
              className="px-2 py-1 text-sm bg-blue-500 text-white rounded"
              to="/"
            >
              Посетить
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
