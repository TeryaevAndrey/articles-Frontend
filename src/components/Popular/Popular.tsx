import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getPopularTags } from "@/utils";
import { Loader, PopularLink } from "@/components";
import { popularTags } from "@/store/slices/popularTagsSlice";
import { loaders } from "@/store/slices/loadersSlice";

interface IPopular {
  beforeUrl: string;
}

export const Popular: FC<IPopular> = ({ beforeUrl }) => {
  const popularTagsStates = useAppSelector(popularTags).tags;
  const loading = useAppSelector(loaders).loadingPopularTags;
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPopularTags);
  }, []);

  return (
    <div className="flex bg-slate-100 rounded w-full h-max lg:gap-x-10 shadow py-4 min-h-[200px]">
      <div className="w-full">
        <h2 className="text-center font-medium">Популярные теги</h2>

        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Loader
              style={{ width: "40px", height: "40px", color: "#3b82f6" }}
            />
          </div>
        ) : (
          <>
            <div className="flex flex-col mt-3">
              {isShowMore
                ? popularTagsStates.slice(0, 8).map((tag, idx) => {
                    return (
                      <PopularLink
                        key={idx}
                        title={tag._id}
                        beforeUrl={beforeUrl}
                      />
                    );
                  })
                : popularTagsStates.slice(0, 4).map((tag, idx) => {
                    return (
                      <PopularLink
                        key={idx}
                        title={tag._id}
                        beforeUrl={beforeUrl}
                      />
                    );
                  })}
            </div>
            {popularTagsStates.length > 4 && (
              <div
                className="text-center font-light mt-4 text-sm cursor-pointer active:opacity-001 ease-linear duration-75"
                onClick={() => setIsShowMore(!isShowMore)}
              >
                {isShowMore ? "Свернуть" : "Показать еще"}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
