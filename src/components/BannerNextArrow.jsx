import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const BannerNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} text-2xl text-white rounded-full w-12 h-12 border absolute left-40 top-[75%] flex items-center justify-center cursor-pointer hover:bg-[#28B0A6] hover:text-white active:scale-150 duration-500`}
      onClick={onClick}
    ><FaArrowRight /></div>
  );
}

export default BannerNextArrow
