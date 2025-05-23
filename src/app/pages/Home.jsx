'use client'
import React from "react"
import '../styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
import { useState } from "react"



export default function Home() {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="home">
      <div className="textContainer">
        <h1>Bienvenue sur mon <span className="portText">PORTFOLIO</span></h1>
      </div>
      <div className="contactContainer">
        <img className="pic" src={isHovered ? "/assets/picFun.jpg" : "/assets/picNormal.jpg"} alt="Charlie Le Youdec"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)} />
        <div className='linkContainer'>
          <div id='linkSpace'>
            <FontAwesomeIcon icon={faLinkedin} id='icons' />
            <Link href='https://www.linkedin.com/in/charlie-le-youdec-67bb8455/' id='linkTree'>LinkedIn</Link>
          </div>
          <div id='linkSpace'>
            <FontAwesomeIcon icon={faGithub} id='icons' />
            <Link href='https://github.com/CharlieCapsule/cinefilms' id='linkTree'>GitHub</Link></div>
          <div id='linkSpace'>
            <FontAwesomeIcon icon={faEnvelope} id='icons' />
            <a className='cvTree' href="mailto:cleyoudec@gmail.com">cleyoudec@gmail.com</a></div>
          <div id='linkSpace'>
            <FontAwesomeIcon icon={faPhone} id='icons' />
            <span id='linkTree'>06 79 55 32 79</span></div>
        </div>
        <div>
          <a href="/assets/cv.pdf" download target="_blank" rel="noopener noreferrer">
            <button className='cv'>Télécharger mon CV</button>
          </a>
        </div>
      </div>
      <p className="nameTextTwo">Mon nom est Charlie. Je conçois vos sites et applications mobiles sur mesure.</p>
      <p id='mainText'>Vous avez un besoin, une idée, une envie ?</p>
      <p id='mainText'>J'ai des lignes de code et du café.</p>
    </section>
  )
}
