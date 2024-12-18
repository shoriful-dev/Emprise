import React from "react";
import Container from "../components/Container";
import Text from "../components/Text";
import CategoryCart from "../components/CategoryCart";
import Beach from "../assets/beach.png";
import Bungee from "../assets/bungee.png";
import City from "../assets/city.png";
import Backpack from "../assets/Backpack.png";
import Jungle from "../assets/Jungle.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import CategoryNextArrow from "../components/CategoryNextArrow";
import CategoryPrevArrow from "../components/CategoryPrevArrow";

const Category = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    nextArrow: <CategoryNextArrow />,
    prevArrow: <CategoryPrevArrow />,
  };
  return (
    <>
      <Container>
        <div className="">
          <Text
            text={"Select Category"}
            as={"h3"}
            className={"text-[40px] font-bold text-[#1D293F]"}
          />
          <Text
            text={
              "Sost Brilliant reasons Entrada should be your one-stop-shop!"
            }
            as={"h3"}
            className={"text-2xl text-[#1D293F] mb-16"}
          />
        </div>
        <Slider {...settings}>
          <div className={"mb-12"}>
            <div className="w-[375px] h-[295px] border px-8 py-5 shadow-xl">
              <CategoryCart
                badgeText={"4.9"}
                imgSrc={Beach}
                text1={"Beach Activity"}
                text2={"196 Activities"}
              />
            </div>
          </div>

          <div className={"flex mb-12"}>
            <div className="w-[375px] h-[295px] border px-8 py-5 shadow-xl">
              <CategoryCart
                badgeText={"4.5"}
                imgSrc={Bungee}
                text1={"Bungee Jump"}
                text2={"196 Activities"}
              />
            </div>
          </div>

          <div className={"flex mb-12"}>
            <div className="w-[375px] h-[295px] border px-8 py-5 shadow-xl">
              <CategoryCart
                badgeText={"3.8"}
                imgSrc={City}
                text1={"City Tours"}
                text2={"196 Activities"}
              />
            </div>
          </div>

          <div className={"flex mb-12"}>
            <div className="w-[375px] h-[295px] border px-8 py-5 shadow-xl">
              <CategoryCart
                badgeText={"4.8"}
                imgSrc={Backpack}
                text1={"Hiking trips"}
                text2={"196 Activities"}
              />
            </div>
          </div>

          <div className={"flex mb-12"}>
            <div className="w-[375px] h-[295px] border px-8 py-5 shadow-xl">
              <CategoryCart
                badgeText={"4.1"}
                imgSrc={Jungle}
                text1={"Jungle Tourses"}
                text2={"196 Activities"}
              />
            </div>
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default Category;
