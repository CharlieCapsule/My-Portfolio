import React from 'react'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Page() {
  return (
    <>
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}