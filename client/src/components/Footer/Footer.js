import React from 'react'
import About from './About'
import Authors from './Authors'
import Careers from './Careers'
import Help from './Help'
import Privacy from './Privacy'
import './footer.css'

export default function Footer() {
  return (
    <div className="footerContainer">
      <About />
      <Help />
      <Privacy />
      <Authors />
      <Careers />
    </div>
  )
}
