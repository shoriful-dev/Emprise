import React from 'react'

const Image = ({ imgSrc, imgAlt, className}) => {
  return (
    <img className={`bg-no-repeat bg-cover bg-center ${className}`} src={imgSrc} alt={imgAlt} />
  )
}

export default Image
