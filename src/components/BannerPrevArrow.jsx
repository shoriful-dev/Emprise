import React from 'react'
import { FaArrowLeft } from "react-icons/fa";


const BannerPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} text-2xl text-white rounded-full w-12 h-12 border absolute left-24 top-[75%] flex items-center justify-center cursor-pointer hover:bg-[#28B0A6] hover:text-white z-10 active:scale-125 duration-500`}
      onClick={onClick}
    ><FaArrowLeft /></div>
  );
}

export default BannerPrevArrow
