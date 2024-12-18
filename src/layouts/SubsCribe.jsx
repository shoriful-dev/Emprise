import React from "react";
import Container from "../components/Container";
import Image from "../components/Image";
import Dots from "../assets/DotsBg.png";
import ThreeImage from "../assets/photosThree.png";
import Text from "../components/Text";
import { MdOutlineMail } from "react-icons/md";

const SubsCribe = () => {
  return (
    <>
      <Container>
        <div className="w-[1600px] grid grid-cols-2 mb-32 space-x-32 justify-center">
          <div className="flex">
            <Image imgSrc={Dots} className={"w-[64px] h-[344px] mr-[-20px] mt-[-20px]"} />
            <Image imgSrc={ThreeImage} />
          </div>
          <div className="py-14">
            <Text text={"Subscribe For Offers"} as={"h3"} className={"text-2xl text-[#28B0A6]"} />
            <Text text={"Adventures Calling You Guys!"} as={"h3"} className={"text-[48px] font-semibold w-[466px] text-[#1D293F] pt-5 leading-[70px]"} />
            <Text text={"The Brilliant reasons Entrada should be your one-stop-shop!"} as={"h3"} className={"text-2xl text-[#546179] pt-5 w-[470px]"} />
          <div className="pt-16 relative">
          <MdOutlineMail className="text-[#99A3AD] text-[20px] mr-5 absolute mt-[21px] m-2" />
            <input type="text" className="border py-4 px-10 w-[600px] mr-5 shadow-2xl" placeholder="Enter your email"/>
            <button className="bg-[#28B0A6] text-2xl text-white py-[14px] px-5 absolute left-[435px]">Send Now!</button>
            <Text text={"Expect a reply in 2-3 working days"} as={"h3"} className={"text-base text-[#546179] pt-14"} />
          </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SubsCribe;
