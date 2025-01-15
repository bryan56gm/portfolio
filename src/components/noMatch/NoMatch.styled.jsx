// Styled Component
import styled from 'styled-components'
import { Container } from '../../styles/base/Container.styled'

const NoMatchContainer = styled(Container)`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  gap: 1.5rem;
  text-align: center;
`
const NoMatchGlitch = styled.p`
  color: var(--first-color);
  /* font-family: 'Code7x5', sans-serif; */
  font-size: clamp(60px, 5.5vw, 80px);
`

export { NoMatchContainer, NoMatchGlitch }
