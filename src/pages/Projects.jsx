import React, { useContext } from 'react'
// Components
import Project from '../components/project/Project'
// React Helmet
import { Helmet } from 'react-helmet-async'
// Language Context
import { LanguageContext } from '../contexts/LanguageContext'
// Hook Scroll Reveal
import { useProjectsScrollReveal } from '../hooks/useScrollReveal'

const Projects = () => {
  const { languageData: { title } } = useContext(LanguageContext)
  useProjectsScrollReveal()

  return (
    <>
      <Helmet>
        <title>{title?.projects}</title>
        <link rel='canonical' href='https://bryangm.com/projects' />
      </Helmet>

      <main>
        <Project />
      </main>
    </>
  )
}

export default Projects
