import React from "react";
import Container from "./Container";
import Image from "./Image";
import Badge from "./Badge";
import Text from "./Text";
import Button from "./Button";
import { IoShareSocial } from "react-icons/io5";

const BestSellerHoverEffect = ({ imgSrc, badgeText }) => {
  return (
    <>
      <Container>
        <div className="flex relative group mb-32">
          <Image imgSrc={imgSrc} />
          <Badge
            badgeText={badgeText}
            className={
              "bg-[#F9C7D2] text-[#fc2855] absolute top-8 left-[420px]"
            }
          />

          <div className="absolute top-[210px] left-[0px] z-100 px-8 hidden group-hover:block ">
          <Text
          text={"10 Days | 09 Night"}
          as={"h3"}
          className={"text-lg text-white mb-6"}
        />
        <div className="flex w-[480px]">
          <Text
            text={"$895.50"}
            as={"h3"}
            className={"text-3xl font-semibold text-white"}
          />
          <div className="flex ml-auto items-center space-x-5 w-[200px]">
            <span className="py-2 px-2 bg-white border rounded-full">
              <IoShareSocial className="w-6 h-6 text-[#1D293F]" />
            </span>
            <Button btnText={"Explore"} className={"bg-[#28B0A6] text-white"} />
          </div>
        </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BestSellerHoverEffect;
