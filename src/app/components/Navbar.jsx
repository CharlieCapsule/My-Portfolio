'use client'
import Link from 'next/link'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className='picContainer'>
        <h2 className='nameText'>Charlie Le Youdec<span className='titleText'>Web Developper</span></h2>
      </div>
      <div className='titleContainer'>
      </div>
      <a href="#home">Accueil</a>
      <a href="#skills">Compétences</a>
      <a href="#projects">Projets</a>
    </nav>

  )
}