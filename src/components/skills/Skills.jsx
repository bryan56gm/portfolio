import React, { useContext } from 'react'
// ShortID
import { generate as id } from 'shortid'
// Styled Component
import { Section, SectionTitleH2 } from '../../styles/base/Section.styled'
import { Container } from '../../styles/base/Container.styled'
// Component
import { SkillsArticles } from './Skills.styled'
import Article from './Article'
// Context
import { LanguageContext } from '../../contexts/LanguageContext'
// Utils
import { getSkillsArticles } from '../../utils/skillsData'

const Skills = () => {
  const { languageData: { skills } } = useContext(LanguageContext)
  const articles = getSkillsArticles(skills)

  return (
    <Section>
      <Container>
        <SectionTitleH2>{skills?.title}</SectionTitleH2>
        <SkillsArticles>
          {articles.map((article) => (
            <Article key={id()} title={article.title} images={article.images} />
          ))}
        </SkillsArticles>
      </Container>
    </Section>
  )
}

export default Skills
