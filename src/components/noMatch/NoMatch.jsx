import React, { useContext } from 'react'
// Styled Components
import { Section } from '../../styles/base/Section.styled'
import { NoMatchContainer, NoMatchGlitch } from './NoMatch.styled'
// Components
import Button from '../button/Button'
// React Router
import { NavLink } from 'react-router-dom'
import { LanguageContext } from '../../contexts/LanguageContext'
// Hooks
import useGlitch from '../../hooks/useGlitch'

const NoMatch = () => {
  const { languageData: { noMatch } } = useContext(LanguageContext)
  const { glitchText } = useGlitch()

  return (
    <Section>
      <NoMatchContainer>
        <NoMatchGlitch>{glitchText}</NoMatchGlitch>
        <h1>{noMatch?.title}</h1>
        <p>{noMatch?.text}</p>
        <NavLink to='/'>
          <Button icon='home'>{noMatch?.button}</Button>
        </NavLink>
      </NoMatchContainer>
    </Section>
  )
}

export default NoMatch
