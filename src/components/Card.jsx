import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data , refs }) => {
  return (
    <motion.div drag dragConstraints={refs} whileDrag={{scale : 1.2}} className="relative h-60 w-52 rounded-[30px] bg-zinc-300 text-black pt-5 pl-5 pr-5 overflow-hidden flex-shrink-0">
      <FaRegFileAlt />
      <p className="mt-5 text-sm font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full pt-3">
        <div className="flex items-center justify-between mb-4 px-8">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 rounded-full flex items-center justify-center bg-zinc-800 py-3 text-zinc-300">
            {data.close ? <IoCloseSharp /> : <LuDownload />}
          </span>
        </div>
        {data.tags.isOpen && (
          <div className={`w-full py-3 ${data.tags.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3>{data.tags.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
