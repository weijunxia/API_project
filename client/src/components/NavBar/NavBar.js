import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import icon from '../images/user_favicon.png'

function NavBar() {
  return (
    <>
      <div className="container">
        <div className="logo">Blogr</div>
        <div className="home">Home</div>
        <NavLink path="/">Home</NavLink>
        <NavLink to="/newpost">Create New Post</NavLink>
        <NavLink to="/Profile">Profile</NavLink>
        <div className="profile">
          Profile
          <img src={icon} alt="user" className="profile-photo" />
        </div>
      </div>
    </>
  )
}

export default NavBar
