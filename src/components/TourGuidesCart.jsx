import React from 'react'
import Container from './Container'
import Image from './Image'
import Text from './Text'
import Badge from './Badge'
import { FaSquareFacebook, FaSquareInstagram, FaTwitter } from "react-icons/fa6";


const TourGuidesCart = ({imgSrc, badgeText}) => {
  return (
    <>
    <Container>
      <div className="flex justify-between mb-32">
      <div className="flex relative">
        <Image imgSrc={imgSrc} className={'w-[512px] h-[690px] rounded-xl'}/>
        <button className='bg-white text-black text-2xl absolute py-3 px-4 rounded-r-lg top-[93%] left-[0%]'>{badgeText}</button>
      </div>
      <div className="py-10">
        <Text text={"Adventure Guru"} as={"h3"} className={"text-2xl text-[#28B0A6]"} />
        <Text text={"Martina"} as={"h3"} className={"text-[40px] font-medium text-[#1D293F] pt-10"} />  
        <Text text={"James Junior"} as={"h3"} className={"text-[40px] font-medium text-[#1D293F] mb-10"} />
        <div className="flex space-x-[297px]">
        <Text text={"about"} as={"h3"} className={"text-2xl text-black"} />
        <Text text={"about"} as={"h3"} className={"text-2xl text-black"} />
        </div>  
       <div className="flex">
       <div className="">
       <Text text={"Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking."} as={"h3"} className={"w-[370px] text-base text-[#99A3AD] pt-3"} />
        </div>  
       <div className="">
       <Text text={"Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking."} as={"h3"} className={"w-[370px] text-base text-[#99A3AD] pt-3"} />
        </div>  
       </div>
        <div className="flex space-x-14 mt-[220px]">
        <FaSquareFacebook className='text-6xl cursor-pointer active:scale-150 duration-500 text-[#2175ff]'/>
        <FaSquareInstagram className='text-6xl cursor-pointer active:scale-150 duration-500 text-[#ee2a7b]'/>
        <FaTwitter className='text-6xl cursor-pointer active:scale-150 duration-500 text-[#26a7de]'/>
        </div>
      </div>
      </div>
    </Container>
    </>
  )
}

export default TourGuidesCart
