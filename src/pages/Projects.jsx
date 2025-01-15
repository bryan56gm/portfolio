import React, { useContext } from 'react'
// Components
import Project from '../components/project/Project'
// React Helmet
import { Helmet } from 'react-helmet'
// Language Context
import { LanguageContext } from '../contexts/LanguageContext'

const Projects = () => {
  const { languageData: { title } } = useContext(LanguageContext)

  return (
    <>
      <Helmet>
        <title>{title?.projects}</title>
      </Helmet>

      <main>
        <Project />
      </main>
    </>
  )
}

export default Projects
