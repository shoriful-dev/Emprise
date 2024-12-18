import React from 'react'
import Container from '../components/Container'
import QuickLinks from './QuickLinks'
import Image from '../components/Image'
import GetinTouch from '../assets/GetinTouch.png'
import Text from '../components/Text'
import { FaArrowRightLong } from 'react-icons/fa6'
import { MdOutlineMail } from 'react-icons/md'
import FooterImage from '../assets/FooterBottom.png'

const Footer = () => {
  return (
    <>
    <Container>
      <div className="">
        <QuickLinks />
        <div className="">
          <Image imgSrc={GetinTouch} />
        </div>
        <div className="mt-10 grid grid-cols-2 space-x-[195px]">
          <div className="w-[650px] grid grid-cols-3">
            <div className="">
              <Text text={"Services"} as={"h3"} className={"text-2xl text-[#1D293F] font-medium"} />
              <Text text={"Budget Tours"} as={"h3"} className={"text-[#546179] font-medium pt-5"} />
              <Text text={"Expert Insight"} as={"h3"} className={"text-[#546179] font-medium pt-3"} />
              <Text text={"Independent"} as={"h3"} className={"text-[#546179] font-medium pt-3"} />
              <Text text={"Luxury Tours"} as={"h3"} className={"text-[#546179] font-medium pt-3"} />
              <Text text={"Safety Tips"} as={"h3"} className={"text-[#546179] font-medium pt-3"} />
              <Text text={"Tips n Tricks"} as={"h3"} className={"text-[#546179] font-medium pt-3"} />
            </div>

            <div className="">
              <Text text={"Adventures"} as={"h3"} className={"text-2xl text-[#1D293F] font-medium"} />
              <Text text={"Beach Activity"} as={"h3"} className={"text-[#546179] font-medium pt-5"} />
              <Text text={"Bungee Jump"} as={"h3"} className={"text-[#546179] font-medium pt-3"} />
              <Text text={"City Tour"} as={"h3"} className={"text-[#546179] font-medium pt-3"} />
              <Text text={"Hiking Trips"} as={"h3"} className={"text-[#546179] font-medium pt-3"} />
              <Text text={"Night City Walk"} as={"h3"} className={"text-[#546179] font-medium pt-3"} />
              <Text text={"Jungle Safari"} as={"h3"} className={"text-[#546179] font-medium pt-3"} />
            </div>

            <div className="">
              <Text text={"Country"} as={"h3"} className={"text-2xl text-[#1D293F] font-medium"} />
              <Text text={"USA"} as={"h3"} className={"text-[#546179] font-medium pt-5"} />
              <Text text={"Australia"} as={"h3"} className={"text-[#546179] font-medium pt-3"} />
              <Text text={"South Africa"} as={"h3"} className={"text-[#546179] font-medium pt-3"} />
              <Text text={"West Indies"} as={"h3"} className={"text-[#546179] font-medium pt-3"} />
              <Text text={"New Zealand"} as={"h3"} className={"text-[#546179] font-medium pt-3"} />
              <Text text={"Srilanka"} as={"h3"} className={"text-[#546179] font-medium pt-3"} />
            </div>
            
          </div>
          <div className="w-[650px]">
            <Text text={"Get In Touch"} as={"h3"} className={"text-2xl text-[#1D293F] font-medium"} />
            <div className="flex items-center space-x-5">
              <Text text={"Let’s Talk"} as={"h3"} className={"text-[#1D293F] text-[40px] font-medium pt-5"} />
              <FaArrowRightLong className='text-[#1D293F] text-3xl mt-5'/>
            </div>
            <div className="pt-12 relative">
          <MdOutlineMail className="text-[#99A3AD] text-[20px] mr-5 absolute mt-[21px] m-2" />
            <input type="text" className="border py-4 px-10 w-[600px] mr-5 shadow-2xl" placeholder="Enter your email"/>
            <button className="bg-[#28B0A6] text-2xl text-white py-[14px] px-5 absolute left-[435px]">Send Now!</button>
          </div>
          </div>
        </div>
      </div>
        <div className="pt-16 flex justify-between mb-5">
         <Image imgSrc={FooterImage} />
        </div>
    </Container>
    </>
  )
}

export default Footer
