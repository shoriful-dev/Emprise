import React from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import Destination from './../layouts/Destination';
import TourGuides from './../layouts/TourGuides';

const TourGuidePrevArrow = (props) => {
  const { className, onClick } = props;
    return (
      <div
        className={`${className} text-2xl text-[#546179] rounded-full w-12 h-12 border absolute right-16 top-[-20%] flex items-center justify-center cursor-pointer hover:bg-[#28B0A6] hover:text-white active:scale-150 duration-500`}
        onClick={onClick}
      ><FaChevronLeft /></div>
    );
  }

export default TourGuidePrevArrow
