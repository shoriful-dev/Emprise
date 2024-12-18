import React from "react";
import Container from "../components/Container";
import Text from "../components/Text";
import Image from "../components/Image";
import Items from "../assets/Items.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import DestinationNextArrow from "../components/DestinationNextArrow";
import DestinationPrevArrow from "../components/DestinationPrevArrow";
import { Link } from "react-router-dom";

const Destination = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <DestinationNextArrow />,
    prevArrow: <DestinationPrevArrow />,
  };
  return (
    <>
      <Container className={"mb-32"}>
        <div className="mt-10">
          <Text
            text={"Top Destinations"}
            as={"h3"}
            className={"text-[40px] font-bold text-[#1D293F] "}
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
          <Link to={"/"}>
            <Image imgSrc={Items} />
          </Link>
          <Link to={"/"}>
            <Image imgSrc={Items} />
          </Link>
          <Link to={"/"}>
            <Image imgSrc={Items} />
          </Link>
        </Slider>
      </Container>
    </>
  );
};

export default Destination;
