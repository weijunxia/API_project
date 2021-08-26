import React from 'react'
import './banner.css'
import bannerPlaceholder from '../images/banner-placeholder.png'

export default function Banner() {
  return (
    <div>
      <img src={bannerPlaceholder} alt="banner" className="banner" />
    </div>
  )
}
