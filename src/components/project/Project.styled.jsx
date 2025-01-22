import styled from 'styled-components'
import { Container } from '../../styles/base/Container.styled'
// Responsive
import device from '../../styles/responsive/breakpoints'

const ProjectTitle = styled.h2`
    margin-bottom: 2rem;
`

const ProjectContainer = styled(Container)`
    display: grid;
    row-gap: 1.5rem;
    ${device.tablet`
        row-gap: 2rem;
    `}
`

export { ProjectTitle, ProjectContainer }
