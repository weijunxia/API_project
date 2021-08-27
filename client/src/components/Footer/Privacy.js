import React from 'react'
import './privacy.css'
import termly from '../images/Termly.png'

export default function Privacy() {
  return (
    <div className="privacyContainer">
      <img src={termly} alt="privacy policy" className="privacy"></img>
    </div>
  )
}
