import { useContext } from 'react'
// Context
import { LanguageContext } from '../../contexts/LanguageContext'
// Styled Components
import { ButtonsContainer } from './ButtonsContainer.styled'
// Components
import Button from '../button/Button'

const AboutButtons = ({ scrollToSection }) => {
  const { languageData: { buttons } } = useContext(LanguageContext)

  return (
    <ButtonsContainer className='about__buttons'>
      <Button icon='experience' onClick={() => scrollToSection('experience')}>
        {buttons?.text1}
      </Button>
      <Button icon='skills' onClick={() => scrollToSection('skills')}>
        {buttons?.text2}
      </Button>
    </ButtonsContainer>
  )
}

export default AboutButtons
