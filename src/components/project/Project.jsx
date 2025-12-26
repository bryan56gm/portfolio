import React, { useContext } from 'react'
// Language Context
import { LanguageContext } from '../../contexts/LanguageContext'
// Styled Components
import { Section, SectionTitleH1 } from '../../styles/base/Section.styled'
// Components
import ProjectSwiper from './ProjectSwiper'
import { ProjectContainer } from './Project.styled'
// Utils
import { getFrotendProjects, getBackendProjects } from '../../utils/projectsData'

const Project = () => {
  const { languageData: { projects }, isLoading } = useContext(LanguageContext)
  const frotendProjects = getFrotendProjects(projects)
  const backendProjects = getBackendProjects(projects)

  return (
    !isLoading &&
      <Section>
        <SectionTitleH1>{projects?.title}</SectionTitleH1>

        <ProjectContainer>
          <ProjectSwiper className='project__backend' title='Backend' projects={backendProjects} />
          <ProjectSwiper className='project__frontend' title='Frontend' projects={frotendProjects} />
        </ProjectContainer>
      </Section>

  )
}

export default Project
