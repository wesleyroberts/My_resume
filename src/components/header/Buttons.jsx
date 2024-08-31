import React from 'react'
import CV from '../../assets/cv/welsey_roberts_CV.pdf'
export default function Buttons() {
  return (
    <div className="btn-container">
        <a href={CV} download className='btn btn-secundary'>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}
