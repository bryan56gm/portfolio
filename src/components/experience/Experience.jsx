import React, { useContext } from 'react'
// ShortID
import { generate as id } from 'shortid'
// Styled Component
import { Section, SectionTitleH2 } from '../../styles/base/Section.styled'
import { Container } from '../../styles/base/Container.styled'
// Components
import { ExperienceArticles } from './Experience.styled'
import Article from './Article'
// Context
import { LanguageContext } from '../../contexts/LanguageContext'
// Utils
import { getExperienceArticles } from '../../utils/experienceData'

const Experience = () => {
  const { languageData: { experience } } = useContext(LanguageContext)
  const articles = getExperienceArticles(experience)

  return (
    <Section>
      <Container>
        <SectionTitleH2>{experience?.title}</SectionTitleH2>

        <ExperienceArticles>
          {articles.map((article) => (
            <Article
              key={id()}
              data={article}
            />
          ))}
        </ExperienceArticles>
      </Container>
    </Section>
  )
}

export default Experience
