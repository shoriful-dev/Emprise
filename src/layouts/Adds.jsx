import React from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import Button from '../components/Button'

const Adds = () => {
  return (
    <>
    <Container>
      <div className="w-[1600px] h-[500px] border bg-[#28B0A6] text-center px-60 rounded-2xl mb-32">
        <Text text={"Tour the World from Your Couch with #ExperienceLive!"} as={"h3"} className={"text-[56px] font-medium text-white pt-16 w-[1076px]"} />
        <Text text={"To kickstart your digital adventures with Entrada"} as={"h3"} className={"text-[32px] text-white pt-10 w-[1076px]"} />
        <Button btnText={"Check All"} className={"bg-white text-[#28B0A6] w-[188px] h-[80px] text-2xl mt-12"} />
      </div>
    </Container>
    </>
  )
}

export default Adds
