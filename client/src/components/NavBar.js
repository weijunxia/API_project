import React from 'react'
import './navbar.css'
import icon from '../images/user_favicon.png'

function NavBar() {
  return (
    <>
      <div className="container">
        <div className="logo">Blogr</div>
        <div className="home">Home</div>
        <div className="create-post">Create New Post</div>
        <div className="profile">
          Profile
          <img src={icon} alt="user" className="profile-photo" />
        </div>
      </div>
    </>
  )
}

export default NavBar
