import React from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import TourGuidesCart from "../components/TourGuidesCart"
import TourGuides1 from '../assets/tourGuides1.png'
import TourGuides2 from '../assets/tourGuides2.png'
import TourGuides3 from '../assets/tourGuides3.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import TourGuideNextArrow from '../components/TourGuideNextArrow'
import TourGuidePrevArrow from '../components/TourGuidePrevArrow'

const TourGuides = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <TourGuideNextArrow />,
    prevArrow: <TourGuidePrevArrow />,
  };
  return (
    <>
    <Container>
      <div className="">
        <Text text={"Tour Guides"} as={"h3"} className={"text-[40px] font-bold text-[#1D293F]"} />
        <Text text={"Sost Brilliant reasons Entrada should be your one-stop-shop!"} as={"h3"} className={"text-2xl text-[#1D293F] mb-16"} />
      </div>
      <Slider {...settings}>
      <TourGuidesCart imgSrc={TourGuides1} badgeText={"01"}/>
      <TourGuidesCart imgSrc={TourGuides2} badgeText={"02"}/>
      <TourGuidesCart imgSrc={TourGuides3} badgeText={"03"}/>
    </Slider>     
    </Container>
    </>
  )
}

export default TourGuides
