import React from "react";
import Container from "../components/Container";
import Text from "../components/Text";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Icon from "../assets/icon.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import BannerNextArrow from "../components/BannerNextArrow";
import BannerPrevArrow from "../components/BannerPrevArrow";

const Banner = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <BannerNextArrow />,
    prevArrow: <BannerPrevArrow />,
  };
  return (
    <>
      <div className="pt-12 pb-32">
        <Container>
          <Slider {...settings}>
            {/* First Slide */}
            <div className="bg-bannerImage bg-no-repeat bg-cover py-32 px-24">
              <Text
                text={"The Himalayan Mountain Ranges"}
                as={"p"}
                className={"text-2xl text-white mb-12"}
              />
              <Text
                text={"Nepal Country"}
                as={"h1"}
                className={"text-9xl text-white font-bold"}
              />
              <Flex className={"justify-between"}>
                <div className="flex space-x-5">
                  <Text
                    text={"-02° C"}
                    as={"p"}
                    className={"text-2xl font-medium text-white mt-12"}
                  />
                  <Text
                    text={"Very Cold"}
                    as={"p"}
                    className={"text-2xl font-medium text-white mt-12"}
                  />
                </div>
                <div className="flex space-x-5 pt-10">
                  <div className="">
                    <Image imgSrc={Icon} />
                  </div>
                  <div className="">
                    <Text
                      as={"p"}
                      text={"We Accept Payment Through "}
                      className={"text-2xl text-white"}
                    />
                    <Text
                      as={"p"}
                      text={"All Cards & Banking"}
                      className={"text-2xl text-white"}
                    />
                    <Text
                      as={"p"}
                      text={"Book Now!"}
                      className={
                        "text-2xl font-bold border-b border-white mt-1 inline-block text-white"
                      }
                    />
                  </div>
                </div>
              </Flex>
            </div>
            {/* Second Slide */}
            <div className="bg-bannerImage bg-no-repeat bg-cover py-32 px-24">
              <Text
                text={"The Himalayan Mountain Ranges"}
                as={"p"}
                className={"text-2xl text-white mb-12"}
              />
              <Text
                text={"Nepal Country"}
                as={"h1"}
                className={"text-9xl text-white font-bold"}
              />
              <Flex className={"justify-between"}>
                <div className="flex space-x-5">
                  <Text
                    text={"-02° C"}
                    as={"p"}
                    className={"text-2xl font-medium text-white mt-12"}
                  />
                  <Text
                    text={"Very Cold"}
                    as={"p"}
                    className={"text-2xl font-medium text-white mt-12"}
                  />
                </div>
                <div className="flex space-x-5 pt-10">
                  <div className="">
                    <Image imgSrc={Icon} />
                  </div>
                  <div className="">
                    <Text
                      as={"p"}
                      text={"We Accept Payment Through "}
                      className={"text-2xl text-white"}
                    />
                    <Text
                      as={"p"}
                      text={"All Cards & Banking"}
                      className={"text-2xl text-white"}
                    />
                    <Text
                      as={"p"}
                      text={"Book Now!"}
                      className={
                        "text-2xl font-bold border-b border-white mt-1 inline-block text-white"
                      }
                    />
                  </div>
                </div>
              </Flex>
            </div>
            {/* Third Slider 3 */}
            <div className="bg-bannerImage w-full bg-no-repeat bg-cover py-32 px-24">
              <Text
                text={"The Himalayan Mountain Ranges"}
                as={"p"}
                className={"text-2xl text-white mb-12"}
              />
              <Text
                text={"Nepal Country"}
                as={"h1"}
                className={"text-9xl text-white font-bold"}
              />
              <Flex className={"justify-between"}>
                <div className="flex space-x-5">
                  <Text
                    text={"-02° C"}
                    as={"p"}
                    className={"text-2xl font-medium text-white mt-12"}
                  />
                  <Text
                    text={"Very Cold"}
                    as={"p"}
                    className={"text-2xl font-medium text-white mt-12"}
                  />
                </div>
                <div className="flex space-x-5 pt-10">
                  <div className="">
                    <Image imgSrc={Icon} />
                  </div>
                  <div className="">
                    <Text
                      as={"p"}
                      text={"We Accept Payment Through "}
                      className={"text-2xl text-white"}
                    />
                    <Text
                      as={"p"}
                      text={"All Cards & Banking"}
                      className={"text-2xl text-white"}
                    />
                    <Text
                      as={"p"}
                      text={"Book Now!"}
                      className={
                        "text-2xl font-bold border-b border-white mt-1 inline-block text-white"
                      }
                    />
                  </div>
                </div>
              </Flex>
            </div>
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default Banner;
