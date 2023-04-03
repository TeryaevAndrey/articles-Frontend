import React, { FC } from "react";

const AddComment: FC = () => {
  return (
    <form className="flex flex-col gap-3">
      <textarea
        className="bg-slate-100 p-3 resize-none min-h-[100px] rounded"
        placeholder="Введите отзыв"
      />
      <button className="w-full px-3 py-2 rounded bg-blue-500 text-white lg:py-4">
        Отправить
      </button>
    </form>
  );
};

export default AddComment;
