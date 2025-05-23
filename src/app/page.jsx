import React from 'react'
import Home from '../app/components/Home'
import './styles/globals.css'
import Projects from '../app/components/Projects'
import Skills from '../app/components/Skills'

export default function Page() {
  return (
    <>
      <Home />
      <Projects />
      <Skills />
    </>
  )
}