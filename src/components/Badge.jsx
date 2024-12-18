import React from 'react'

const Badge = ({badgeText, className}) => {
  return (
    <div className={`w-14 h-8 text-center pt-0.5 rounded-full border bg-[#FEF2DE] text-[#F5A623] ml-auto ${className}`}>{badgeText}</div>
  )
}

export default Badge
