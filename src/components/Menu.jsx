import React from 'react'

const Menu = ({ menuText, className}) => {
  return (
    <li className={`text-xl font-medium text-[#1D293F] hover:text-[#28B0A6] hover:font-bold ${className}`}>{menuText}</li>
  )
}

export default Menu
