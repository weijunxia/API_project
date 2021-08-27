import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import icon from '../images/user_favicon.png'

function NavBar() {
  return (
    <div className="container">
      <div className="logo">OnlyBlogs</div>
      <NavLink to="/">
        <div className="home">Home</div>
      </NavLink>
      <NavLink to="/newpost">Create New Post</NavLink>
      <NavLink to="/profile">
        <div className="profile">
          Profile
          <img src={icon} alt="user" className="profile-photo" />
        </div>
      </NavLink>
    </div>
  )
}

export default NavBar
