import React from 'react'

const Button = ({btnText, className}) => {
  return (
    <button className={`w-28 h-12 text-[#1D293F] border rounded-full duration-500 active:scale-150 ${className}`}>{btnText}</button>
  )
}

export default Button
