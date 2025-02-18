import styled, { css } from 'styled-components'
import device from '../responsive/breakpoints'

const Section = styled.section`
    padding-block: 3.75rem;
    ${device.tablet`
        padding-block: 5.25rem;
    `}
`
const SectionTitle = css`
    color: var(--first-color);
    font-size: clamp(25px, 3vw, 32px);
    font-family: 'Code7x5', sans-serif;
    font-weight: bold;
    text-align: center;
    margin-bottom: 50px;
    ${device.tablet`
        margin-bottom: 65px;
    `}
`

const SectionTitleH1 = styled.h1`
    ${SectionTitle}
`
const SectionTitleH2 = styled.h2`
    ${SectionTitle}
`

export { Section, SectionTitleH1, SectionTitleH2 }
