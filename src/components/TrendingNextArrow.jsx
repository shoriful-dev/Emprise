import React from 'react'
import { FaChevronRight } from "react-icons/fa6";

const TrendingNextArrow = (props) => {
  const { className, onClick } = props;
    return (
      <div
        className={`${className} text-2xl rounded-full w-12 h-12 border absolute right-0 top-[-16%] flex items-center justify-center cursor-pointer bg-[#28B0A6] text-white active:scale-150 duration-500`}
        onClick={onClick}
      ><FaChevronRight /></div>
    );
  }

export default TrendingNextArrow
