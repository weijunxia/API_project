import React from 'react'
import userProfile from '../components/images/user_favicon.png'

export default function Profile() {
  return (
    <div>
      <h1>You</h1>
      <img src={userProfile} alt="profile"></img>
    </div>
  )
}
