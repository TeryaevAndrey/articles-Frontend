import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

const Pagination: FC = () => {
    return (
        <div className="flex items-center gap-5">
            <AiOutlineLeft className="cursor-pointer" size={20} color="#3b82f6" />
            <div className="flex items-center gap-3">
                <Link className="flex justify-center items-center rounded bg-blue-500 text-white w-10 h-10" to="/">
                    1
                </Link>
                <Link className="flex justify-center items-center rounded bg-blue-300 text-white w-10 h-10" to="/">
                    2
                </Link>
                <Link className="flex justify-center items-center rounded bg-blue-300 text-white w-10 h-10" to="/">
                    3
                </Link>
            </div>
            <AiOutlineRight className="cursor-pointer" size={20} color="#3b82f6" />
        </div>
    );
};

export default Pagination;