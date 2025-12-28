import { useContext } from 'react'
// Styled Components
import { FlipCardContainer, FlipCardBox, FlipCardFront, FlipCardBack, FlipCardImg, FlipCardTitle, FlipCardIcons, FlipCardIcon, FlipCarText } from './FlipCard.styled'
// Hooks
import useFlipCard from '../../hooks/useFlipCard'
// React-responsive
import { useMediaQuery } from 'react-responsive'
// Language Context
import { LanguageContext } from '../../contexts/LanguageContext'


const FlipCard = ({ config }) => {
  const { languageData: { projects: { iconTitle } } } = useContext(LanguageContext)
  const { src, title, githubLink, internetLink, prototypeLink, text } = config
  const { isFlipped, handleFlipClick } = useFlipCard()
  const isMobile = useMediaQuery({ query: '(max-width: 599px)' })

  return (
    <FlipCardContainer>
      <FlipCardBox className={isFlipped && 'flipped'}>

        <FlipCardFront>
          <FlipCardImg
            loading='lazy'
            alt={src}
            src={isMobile ? `/assets/img/projects/${src}-mb.webp` : `/assets/img/projects/${src}-lp.webp`}
          />
          <FlipCardTitle>{title}</FlipCardTitle>
          <FlipCardIcons>
            <FlipCardIcon src='/assets/icons/info.svg' onClick={handleFlipClick} title={iconTitle.info} width="21px"/>
            {githubLink && <a href={githubLink} target='_blank' rel='noopener noreferrer' title='GitHub'><FlipCardIcon src='/assets/icons/GitHub.svg' /></a>}
            {internetLink && <a href={internetLink} target='_blank' rel='noopener noreferrer' title='Web'><FlipCardIcon src='/assets/icons/internet.svg' /></a>}
            {prototypeLink && <a href={prototypeLink} target='_blank' rel='noopener noreferrer' title={iconTitle.prototype}><FlipCardIcon src='/assets/icons/prototype.svg' width="22px"/></a>}
          </FlipCardIcons>
        </FlipCardFront>

        <FlipCardBack>
          <FlipCardIcon src='/assets/icons/arrow-back.svg' onClick={handleFlipClick} />
          <FlipCarText>{text}</FlipCarText>
        </FlipCardBack>

      </FlipCardBox>
    </FlipCardContainer>
  )
}

export default FlipCard
