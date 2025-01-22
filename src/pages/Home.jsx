import React, { useContext } from 'react'
// Components
import Hero from '../components/hero/Hero'
// React Helmet
import { Helmet } from 'react-helmet'
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
      </Helmet>

      <main>
        <Hero />
      </main>
    </>
  )
}

export default Home
