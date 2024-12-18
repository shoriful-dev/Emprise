import React from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import TrendingCart from '../components/TrendingCart'
import Mountain from '../assets/mountain.png'
import RatingImage from '../assets/Rating.png';
import Train from '../assets/train.png'
import Forest from '../assets/forest.png'
import Cultural from '../assets/cultural.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import TrendingNextArrow from '../components/TrendingNextArrow'
import TrendingPrevArrow from '../components/TrendingPrevArrow'


const Trending = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    nextArrow: <TrendingNextArrow />,
    prevArrow: <TrendingPrevArrow />,
  };
  return (
    <>
      <Container>
        <div className="mt-20">
          <Text
            text={"Trending 2021"}
            as={"h1"}
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
          <TrendingCart
            imgSrc={Mountain}
            badgeText={"30%"}
            text1={"Mountain Hiking Tour"}
            text2={"Hiking Tour | Stoke on Trent"}
            text3={"from"}
            text4={"$895.00"}
            imgSrc2={RatingImage}
            text5={"*Price varies"}
            text6={"7 Days"}
            text7={"Free Cancellation"}
            text8={"New on Entrada"}
          />

          <TrendingCart
            imgSrc={Train}
            badgeText={"70%"}
            text1={"Train Tour Skyline"}
            text2={"Hiking Tour | Stoke on Trent"}
            text3={"from"}
            text4={"$895.00"}
            imgSrc2={RatingImage}
            text5={"*Price varies"}
            text6={"7 Days"}
            text7={"Free Cancellation"}
            text8={"New on Entrada"}
          />

          <TrendingCart
            imgSrc={Forest}
            badgeText={"50%"}
            text1={"Forest Wild Life"}
            text2={"Hiking Tour | Stoke on Trent"}
            text3={"from"}
            text4={"$895.00"}
            imgSrc2={RatingImage}
            text5={"*Price varies"}
            text6={"7 Days"}
            text7={"Free Cancellation"}
            text8={"New on Entrada"}
          />

          <TrendingCart
            imgSrc={Cultural}
            badgeText={"20%"}
            text1={"Cultural highlights round trip"}
            text2={"Hiking Tour | Stoke on Trent"}
            text3={"from"}
            text4={"$895.00"}
            imgSrc2={RatingImage}
            text5={"*Price varies"}
            text6={"7 Days"}
            text7={"Free Cancellation"}
            text8={"New on Entrada"}
          />
        </Slider>
      </Container>
    </>
  );
}

export default Trending
