// Styled Components
import { FlipCardContainer, FlipCardBox, FlipCardFront, FlipCardBack, FlipCardImg, FlipCardTitle, FlipCardIcons, FlipCardIcon, FlipCarText } from './FlipCard.styled'
// Hooks
import useFlipCard from '../../hooks/useFlipCard'
// React-responsive
import { useMediaQuery } from 'react-responsive'

const FlipCard = ({ config }) => {
  const { src, title, githubLink, internetLink, text } = config
  const { isFlipped, handleFlipClick } = useFlipCard()
  const isMobile = useMediaQuery({ query: '(max-width: 599px)' })

  return (
    <FlipCardContainer>
      <FlipCardBox className={isFlipped && 'flipped'}>

        <FlipCardFront>
          <FlipCardImg
            alt={src}
            src={isMobile ? `/assets/img/projects/${src}-mb.webp` : `/assets/img/projects/${src}-lp.webp`}
          />
          <FlipCardTitle>{title}</FlipCardTitle>
          <FlipCardIcons>
            <FlipCardIcon src='/assets/icons/info.svg' onClick={handleFlipClick} />
            {githubLink && <a href={githubLink} target='_blank' rel='noopener noreferrer'><FlipCardIcon src='/assets/icons/GitHub.svg' /></a>}
            {internetLink && <a href={internetLink} target='_blank' rel='noopener noreferrer'><FlipCardIcon src='/assets/icons/internet.svg' /></a>}
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
