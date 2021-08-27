import React from 'react'
import qr from '../images/payment.jpeg'

export default function Support() {
  return (
    <div>
      <h1>Support</h1>
      <h3>
        Help support our fight against BIG BANKING industry by sending us
        anything
      </h3>
      <img src={qr} alt="payment"></img>
      <p>BTC address: 179iHUdAmmx8pMTwLAjYRzG24YxyPuU1fn</p>
    </div>
  )
}
