import { useContext } from 'react'
// Components
import Description from '../components/description/Description'
import Experience from '../components/experience/Experience'
import Skills from '../components/skills/Skills'
import AboutButtons from '../components/aboutButtons/AboutButtons'
// React Helmet
import { Helmet } from 'react-helmet-async'
// Context
import { LanguageContext } from '../contexts/LanguageContext'
// Hook Scroll Reveal
import { useAboutScrollReveal } from '../hooks/useScrollReveal'
import useScrollToSection from '../hooks/useScrollToSection'

const About = () => {
  const { languageData: { title } } = useContext(LanguageContext)
  const { dynamicContentRef, selectedComponent, scrollToSection } = useScrollToSection()
  useAboutScrollReveal()

  return (
    <>
      <Helmet>
        <title>{title?.about}</title>
        <link rel='canonical' href='https://bryangm.com/about' />
      </Helmet>

      <main>
        <Description />

        {/* Dynamic content Buttons */}
        <AboutButtons scrollToSection={scrollToSection} />

        {/* Dynamic content Container */}
        <div ref={dynamicContentRef}>
          {selectedComponent === 'experience' && <Experience />}
          {selectedComponent === 'skills' && <Skills />}
        </div>
      </main>
    </>
  )
}

export default About
