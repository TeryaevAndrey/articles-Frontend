import React, { FC } from 'react';

interface ITag {
  tag: string;
}

const Tag: FC<ITag> = ({ tag }) => {
  return (
    <div className="p-1 bg-blue-100 rounded cursor-pointer">{tag}</div>
  );
};

export default Tag;