import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import PartnarsBg from '../assets/Partners.png'

const Partnars = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-center">
        <Image imgSrc={PartnarsBg} />
        </div>
      </Container>
    </div>
  )
}

export default Partnars
