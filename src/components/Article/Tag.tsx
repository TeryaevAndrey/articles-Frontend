import { FC } from "react";

interface ITag {
  tag: string;
}

export const Tag: FC<ITag> = ({ tag }) => {
  return <div className="p-1 bg-blue-100 rounded">{tag}</div>;
};