import React, { FC } from "react";
import { useAppDispatch } from "../store/store";
import { v4 as uuidv4 } from "uuid";
import { MdDeleteForever } from "react-icons/md";

interface ITags {
  tags: string[];
  setTags: Function;
}

const Tags: FC<ITags> = ({ tags, setTags }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {tags.map((tag, idx) => {
        return (
          <div
            key={uuidv4()}
            className="p-3 bg rounded-full bg-blue-300 text-white flex items-center gap-2"
          >
            <span>{tag}</span>
            <MdDeleteForever
              onClick={() => {
                dispatch(
                  setTags(
                    tags.filter((_, tagIdx) => {
                      return idx !== tagIdx;
                    })
                  )
                );
              }}
              className="cursor-pointer"
              size={25}
              color="red"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
