import React, { useContext } from 'react'
// Language Context
import { LanguageContext } from '../../contexts/LanguageContext'
// Styled Components
import { Section, SectionTitleH1 } from '../../styles/base/Section.styled'
import { Container } from '../../styles/base/Container.styled'
// Components
import ProjectSwiper from './ProjectSwiper'

const Project = () => {
  const { languageData: { projects }, isLoading } = useContext(LanguageContext)

  const htmlProjects = [
    {
      title: 'Kreisel Events',
      text: projects?.frontend.kreiselEvents,
      src: 'kreisel',
      internetLink: 'https://www.kreiselevents.com/'
    },
    {
      title: 'Garcinstal Multiservices LTD',
      text: projects?.frontend.garcinstal,
      src: 'garcinstal',
      internetLink: 'https://www.garcinstal.com/'
    },
    {
      title: 'Giriga comida Fusión',
      text: projects?.frontend.giriga,
      src: 'giriga',
      internetLink: 'https://bryan56gm.github.io/giriga/',
      githubLink: 'https://github.com/bryan56gm/giriga'
    },
    {
      title: 'Rise Horizon',
      text: projects?.frontend.riseHorizon,
      src: 'horizon',
      githubLink: 'https://github.com/bryan56gm/risehorizon',
      internetLink: 'https://bryan56gm.github.io/risehorizon/'
    },
    {
      title: 'Portfolio Designer',
      text: projects?.frontend.portfolioDesigner,
      src: 'portfolio-designer',
      githubLink: 'https://github.com/bryan56gm/creative-uxui',
      internetLink: 'https://kevin-uxui.github.io/portfolio/'
    },
    {
      title: 'Portfolio Developer',
      text: projects?.frontend.portfolioDeveloper,
      src: 'portfolio-developer',
      githubLink: 'https://github.com/bryan56gm/bryan56gm.github.io',
      internetLink: 'https://bryangm.com/'
    }
  ]

  const cssProjects = [
    {
      title: 'Movie finder',
      text: projects?.backend.movieFinder,
      src: 'movies',
      githubLink: 'https://github.com/bryan56gm/movie-finder',
      internetLink: 'https://movie-finder-seven-swart.vercel.app/'

    },
    {
      title: 'Flask Finance',
      text: projects?.backend.flaskFinance,
      src: 'finance',
      githubLink: 'https://github.com/bryan56gm/finance',
      internetLink: 'https://finance-inky-iota.vercel.app/'
    },
    {
      title: 'Birthdays',
      text: projects?.backend.birthdays,
      src: 'birthdays',
      githubLink: 'https://github.com/bryan56gm/birthdays'
    },
    {
      title: 'AJAX Request',
      text: projects?.backend.ajaxRequest,
      src: 'ajax',
      githubLink: 'https://github.com/bryan56gm/heroes'
    },
    {
      title: 'Trivia',
      text: projects?.backend.trivia,
      src: 'trivia',
      githubLink: 'https://github.com/bryan56gm/trivia',
      internetLink: 'https://bryan56gm.github.io/trivia/'

    }
  ]

  return (
    !isLoading &&
      <Section>
        <SectionTitleH1>{projects?.title}</SectionTitleH1>
        <Container>
          <ProjectSwiper title='Frontend' projects={htmlProjects} />
          <ProjectSwiper title='Backend' projects={cssProjects} />
        </Container>
      </Section>

  )
}

export default Project
