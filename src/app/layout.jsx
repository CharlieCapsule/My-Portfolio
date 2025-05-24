import React from 'react'
import Navbar from './components/Navbar'
import './styles/globals.css'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Home from './pages/Home'


export const metadata = {
  title: 'Charlie Le Youdec - Développeur Web Full Stack',
  description: 'Bienvenue sur le portfolio de Charlie Le Youdec, développeur web full stack spécialisé en React, Node.js et Next.js.',
  keywords: ['Charlie Le Youdec', 'Développeur Web', 'React', 'Next.js', 'Node.js', 'Portfolio développeur'],
  authors: [{ name: 'Charlie Le Youdec', url: 'https://www.charlieleyoudec.com' }],
  creator: 'Charlie Le Youdec',
  openGraph: {
    title: 'Charlie Le Youdec - Développeur Web',
    description: 'Découvrez le portfolio de Charlie Le Youdec, développeur web passionné basé en France.',
    url: 'https://www.charlieleyoudec.com',
    siteName: 'Portfolio de Charlie Le Youdec',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charlie Le Youdec - Développeur Web',
    description: 'Portfolio professionnel de Charlie Le Youdec, développeur web full stack.',
    images: ['https://www.charlieleyoudec.com/assets/preview.jpg'],
  },
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