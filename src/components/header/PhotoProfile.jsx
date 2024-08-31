import React from 'react'
import profile from '../../assets/images/welseyProfile.png'

export default function PhotoProfile() {
  return (
    <div className="photo__ptofile">
        <div className="gradient__effect"></div>
        <img src={profile} alt='wesley roberts'/>
    </div>
  )
}
