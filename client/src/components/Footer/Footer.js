import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  return (
    <div className="footerContainer">
      <NavLink to="/about" className="navLink">
        <div className="footerDiv">About</div>
      </NavLink>
      <NavLink to="/help" className="navLink">
        <div className="footerDiv">Help</div>
      </NavLink>
      <NavLink to="/privacy" className="navLink">
        <div className="footerDiv">Privacy</div>
      </NavLink>
      <NavLink to="/authors" className="navLink">
        <div className="footerDiv">Authors</div>
      </NavLink>
    </div>
  )
}
