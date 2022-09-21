import React from 'react'
import logo from '../assets/banner.jpg'
export default function BannerKomponen() {
  return (
    <div className='w-10 min-h-screen' >
      <img className='object-contain'height="700px" width="100%" src={logo} alt="nama logo" />
    </div>
  )
}
