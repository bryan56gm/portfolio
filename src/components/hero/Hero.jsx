import React, { useContext } from 'react'
// Styled Components
import { Section } from '../../styles/base/Section.styled'
import { HeroContainer, HeroAvatar, HeroData, HeroTitle, HeroSubtitle, HeroText } from './Hero.styled'
// Components
import Social from '../social/Social'
// Language Context
import { LanguageContext } from '../../contexts/LanguageContext'

const Hero = () => {
  const { languageData: { hero } } = useContext(LanguageContext)

  return (
    <Section>
      <HeroContainer>
        <HeroAvatar
          src='/assets/img/avatar.webp'
          alt='Personal avatar profile'
        />

        <HeroData>
          <HeroTitle>Bryan Garcia Munive</HeroTitle>
          <HeroSubtitle>{hero?.subtitle}</HeroSubtitle>
          <HeroText>{hero?.text}</HeroText>
          <Social />
        </HeroData>
      </HeroContainer>
    </Section>
  )
}

export default Hero
