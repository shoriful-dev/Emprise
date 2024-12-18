import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import SupportBg from '../assets/Support.png'

const Questions = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-center mt-20 mb-32">
          <Image imgSrc={SupportBg} />
        </div>
      </Container>
    </div>
  )
}

export default Questions
