import React from 'react'
import Container from './Container'
import Image from './Image'
import Text from './Text'
import { FaRegHeart } from "react-icons/fa";
import { LuClock } from 'react-icons/lu';
import { MdDone } from 'react-icons/md';
import Badge from './Badge';


const TrendingCart = ({imgSrc, badgeText, text1, text2, text3, text4, imgSrc2, text5, text6, text7, text8}) => {
  return (
    <>
    <Container>
      <div className="w-[512px] h-[614px] border rounded-xl shadow-xl mb-20">
        <div className="flex relative">
        <Image imgSrc={imgSrc} className={'px-4 pt-4'}/>
        <Badge badgeText={badgeText} className={"bg-[#F9C7D2] text-[#EE5879] absolute top-10 right-10"} />
        </div>
        <div className="flex items-center px-8 pt-8 justify-between">
        <Text text={text1} as={"h3"} className={"text-2xl font-semibold text-[#1D293F]"} />
        <FaRegHeart className='w-8 h-8 text-[#546179]'/>
        </div>
        <Text text={text2} as={"h3"} className={"text-base text-[#99A3AD] px-8 pt-1"} />
        <Text text={text3} as={"h3"} className={"text-sm text-[#546179] px-8 pt-5"} />
        <div className="flex justify-between">
          <Text text={text4} as={"h3"} className={"text-3xl font-semibold text-[#1D293F] px-8 pt-3"} />
          <Image imgSrc={imgSrc2} className={'px-8 pt-4'}/>
        </div>
        <Text text={text5} as={"h3"} className={"text-sm text-[#546179] px-8"} />
        <div className="px-8 pt-8 flex">
        <LuClock className='text-[#28B0A6] text-[18px]'/>
        <Text text={text6} as={"h3"} className={"text-sm text-[#546179] ml-2"} />
        </div>
        <div className="px-8 pt-4 flex">
        <MdDone className='text-[#28B0A6] text-[18px]'/>
        <Text text={text7} as={"h3"} className={"text-sm text-[#546179] ml-2"} />
        <MdDone className='text-[#28B0A6] text-[18px] ml-6'/>
        <Text text={text8} as={"h3"} className={"text-sm text-[#546179] ml-2"} />
        </div>
      </div>
    </Container>
    </>
  )
}

export default TrendingCart
