import React from 'react'
import Navbar from './components/Navbar'
import './styles/globals.css'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Home from './pages/Home'


export const metadata = {
  title: 'Charlie Le Youdec - Portfolio',
  description: 'Portfolio développeur web',
}

export default function RootLayout() {
  return (
    <html lang="fr">
      <body >
        <Navbar />
        <main>
          <Home />
          <Skills />
          <Projects />
        </main>
      </body>
    </html>
  )
}