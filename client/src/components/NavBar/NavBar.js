import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import icon from '../images/user_favicon.png'

function NavBar() {
  return (
    <div className="container">
      <div className="logo">OnlyBlogs</div>
      <NavLink to="/" className="navBarLink">
        <div className="navBar">Home</div>
      </NavLink>
      <NavLink to="/newpost" className="navBarLink">
        <div className="navBar">Create New Post</div>
      </NavLink>
      <NavLink to="/profile" className="navBarLink">
        <div className="navBar">
          Profile
          <img src={icon} alt="user" className="profile-photo" />
        </div>
      </NavLink>
    </div>
  )
}

export default NavBar
