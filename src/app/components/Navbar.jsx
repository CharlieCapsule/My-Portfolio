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
      <Link href="#home">Accueil</Link>
      <Link href="#skills">Compétences</Link>
      <Link href="#projects">Projets</Link>
    </nav>

  )
}