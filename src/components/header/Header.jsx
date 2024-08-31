import React from 'react'
import './header.css'
import Buttons from './Buttons'
import PhotoProfile from './PhotoProfile'
import HeaderSocials from './HeaderSociais'
export default function Home() {
  return (
      <div className='container'>     
          <div className='container__apresentation'>
            <h5>Olá, eu sou</h5>
            <h1>Welsey Roberts</h1>
            <h5>Consultor e Desenvolvedor <span className='liferay'>Liferay</span> Sênior</h5>
            <Buttons/>
          </div>
          <PhotoProfile/>
          <HeaderSocials/>
      </div>
  )
}
