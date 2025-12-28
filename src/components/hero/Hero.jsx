import { useContext } from 'react'
// Styled Components
import { HeroSection, HeroContainer, HeroAvatar, HeroData, HeroTitle, HeroSubtitle, HeroText } from './Hero.styled'
// Components
import Social from '../social/Social'
// Language Context
import { LanguageContext } from '../../contexts/LanguageContext'

const Hero = () => {
  const { languageData: { hero } } = useContext(LanguageContext)

  return (
    <HeroSection>
      <HeroContainer>
        <HeroAvatar
          className='hero__avatar'
          src='/assets/img/avatar.webp'
          alt='Personal avatar profile'
        />

        <HeroData>
          <HeroTitle className='hero__title'>Bryan Garcia Munive</HeroTitle>
          <HeroSubtitle className='hero__subtitle'>{hero?.subtitle}</HeroSubtitle>
          <HeroText className='hero__text'>{hero?.text}</HeroText>
          <Social />
        </HeroData>
      </HeroContainer>
    </HeroSection>
  )
}

export default Hero
