import React from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import Button from '../components/Button'
import BestSellerHoverEffect from '../components/BestSellerHoverEffect'
import BestSeller1 from '../assets/BestPhoto1.png'
import BestSeller2 from '../assets/BestPhoto2.png'
import BestSeller3 from '../assets/BestPhoto3.png'

const BestSeller = () => {
  return (
    <>
    <Container>
      <div className="flex justify-between">
        <Text text={"Best Seller"} as={"h3"} className={"text-[40px] font-bold text-[#1D293F]"} />
        <Button btnText={"Check All"} className={"bg-[#28B0A6] text-white w-[188px] h-[80px] text-2xl"} />
      </div>
        <Text text={"Sost Brilliant reasons Entrada should be your one-stop-shop!"} as={"h3"} className={"text-2xl text-[#1D293F] mb-16"} />
        <div className="flex">
        <BestSellerHoverEffect imgSrc={BestSeller1} badgeText={"30%"} />
        <BestSellerHoverEffect imgSrc={BestSeller2} badgeText={"60%"} />
        <BestSellerHoverEffect imgSrc={BestSeller3} badgeText={"90%"} />
        </div>
    </Container>
    </>
  )
}

export default BestSeller
