import React, { useState, useRef, useContext } from 'react'
// Components
import Description from '../components/description/Description'
import Experience from '../components/experience/Experience'
import Skills from '../components/skills/Skills'
import AboutButtons from '../components/aboutButtons/AboutButtons'
// React Helmet
import { Helmet } from 'react-helmet'
// Context
import { LanguageContext } from '../contexts/LanguageContext'

const About = () => {
  const { languageData: { title } } = useContext(LanguageContext)

  const dynamicContentRef = useRef(null)
  const [selectedComponent, setSelectedComponent] = useState(null)

  return (
    <>
      <Helmet>
        <title>{title?.about}</title>
      </Helmet>

      <main>
        <Description />
        <AboutButtons dynamicContentRef={dynamicContentRef} setSelectedComponent={setSelectedComponent} />

        <div ref={dynamicContentRef}>
          {selectedComponent === 'experience' && <Experience />}
          {selectedComponent === 'skills' && <Skills />}
        </div>
      </main>
    </>
  )
}

export default About
