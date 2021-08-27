import React from 'react'
import { NavLink } from 'react-router-dom'
import About from './About'
import Authors from './Authors'
import Help from './Help'
import Privacy from './Privacy'
import './footer.css'

export default function Footer() {
  return (
    <div className="footerContainer">
      <NavLink to="/about">
        <About />
      </NavLink>
      <NavLink to="/help">
        <Help />
      </NavLink>
      <NavLink to="/privacy">
        <Privacy />
      </NavLink>
      <NavLink to="/authors">
        <Authors />
      </NavLink>
    </div>
  )
}
