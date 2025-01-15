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

const Skills = () => {
  const { languageData: { skills } } = useContext(LanguageContext)

  const articles = [
    {
      title: skills?.subtitle1,
      images: ['HTML', 'CSS', 'Pug', 'SASS']
    },
    {
      title: skills?.subtitle2,
      images: ['C', 'Java', 'Python', 'JavaScript']
    },
    {
      title: skills?.subtitle3,
      images: ['NodeJS', 'Flask', 'React', 'Gulp']
    },
    {
      title: skills?.subtitle4,
      images: ['SQL', 'MySQL']
    },
    {
      title: skills?.subtitle5,
      images: ['Git', 'GitHub']
    },
    {
      title: skills?.subtitle6,
      images: ['AdobeXD', 'Figma', 'Illustrator', 'Photoshop']
    }
  ]

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
