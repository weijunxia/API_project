import React from 'react'
import mainBanner from '../images/banner-placeholder.png'
import './banner.css'
export default function Banner() {
  return (
    <>
      <div>
        <img src={mainBanner} alt="banner" className="banner" />
      </div>
    </>
  )
}
