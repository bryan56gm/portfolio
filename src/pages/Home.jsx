import React, { useContext } from 'react'
// Components
import Hero from '../components/hero/Hero'
// React Helmet
import { Helmet } from 'react-helmet-async'
// Language Context
import { LanguageContext } from '../contexts/LanguageContext'
// Hook Scroll Reveal
import { useHomeScrollReveal } from '../hooks/useScrollReveal'

const Home = () => {
  const { languageData: { title } } = useContext(LanguageContext)
  useHomeScrollReveal()

  return (
    <>
      <Helmet>
        <title>{title?.home}</title>
        <link rel='canonical' href='https://bryangm.com/' />
        {/* <meta property="og:title" content="Bryan García Munive - Desarrollador Front-End" />
        <meta property="og:description" content="Conoce más sobre mi experiencia y proyectos como desarrollador front-end." />
        <meta property="og:image" content="https://tusitio.com/imagen.jpg" />
        <meta property="og:url" content="https://tusitio.com" /> */}
      </Helmet>

      <main>
        <Hero />
      </main>
    </>
  )
}

export default Home
