import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { BsYoutube } from "react-icons/bs";

export default function HeaderSocials() {
  return (
    
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/wesley-roberts-9714a7189/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/wesleyroberts" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://www.youtube.com/@revisandocodigo9273" target="_blank" rel='noreferrer'><BsYoutube/></a>
    </div>
  )
}
