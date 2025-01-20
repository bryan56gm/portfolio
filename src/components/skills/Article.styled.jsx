import styled from 'styled-components'
import device from '../../styles/responsive/breakpoints'

const ArticleTitle = styled.h3`
    margin-bottom: 1.5rem;
    color: var(--first-color);
    font-weight: bold;
    font-size: 18px;
`

const ArticleList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;  /* Espacio entre los íconos */
    ${device.tablet`
        gap: 2rem;  
    `}
`

const ArticleIconContainer = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
    /* box-shadow: 0 0 35px 12px ${({ $shadowcolor }) => $shadowcolor || 'transparent'}; */
    box-shadow: inset 0 0 10px 5px ${({ $shadowcolor }) => $shadowcolor || 'transparent'};
    padding: 1rem;
    border-radius: 10px;
    transition: all .2s ease-in-out;
    position: relative;

    &:hover{
        box-shadow: inset 0 0 10px 8px ${({ $shadowcolor }) => $shadowcolor || 'transparent'};
        outline: 2px solid ${({ $shadowcolor }) => $shadowcolor || 'transparent'};
    }

    &:hover > div{
        opacity: 1;
        outline: 2px solid ${({ $shadowcolor }) => $shadowcolor || 'transparent'};
    }

    ${device.tablet`
        width: 65px;
        height: 65px;
    `}
`

const ArticleIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
const ArticleTooltip = styled.div`
    position: absolute;
    bottom: 120%;
    opacity: 0;
    transition-delay: .2s;
    padding: .3rem .8rem;
    border-radius: 5px;
    font-size: 14px;
    backdrop-filter: blur(2px);
    font-weight: 600;
    font-style: italic;
    
    ${device.tablet`
        font-size: 15px;
    `}
`

export { ArticleTitle, ArticleList, ArticleIconContainer, ArticleIcon, ArticleTooltip }
