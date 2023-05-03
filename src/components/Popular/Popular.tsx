import React, { FC, useEffect, useState } from "react";
import PopularLink from "./PopularLink";
import { useAppDispatch, useAppSelector } from "../../store/store";
import getPopularTags from "../../utils/getPopularTags";

const Popular: FC = () => {
  const dispatch = useAppDispatch();
  const popularTags = useAppSelector((state) => state.popularTags.tags);
  const [isShowMore, setIsShowMore] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getPopularTags);
  }, []);

  return (
    <div className="flex bg-slate-100 rounded w-full h-max lg:gap-x-10 shadow py-4">
      <div className="w-full">
        <h2 className="text-center font-medium">Популярные темы</h2>

        <div className="flex flex-col mt-3">
          {
            isShowMore ? (
              popularTags.slice(0, 8).map((tag, idx) => {
                return (
                  <PopularLink key={idx} title={tag._id} />
                )
              })
            ) : (
              popularTags.slice(0, 4).map((tag, idx) => {
                return (
                  <PopularLink key={idx} title={tag._id} />
                )
              })
            )
          }
        </div>
        {
          popularTags.length > 4 && (
            <div className="text-center font-light mt-4 text-sm cursor-pointer active:opacity-001 ease-linear duration-75" onClick={() => setIsShowMore(!isShowMore)}>
              {
                isShowMore ? "Свернуть" : "Показать еще"
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Popular;
