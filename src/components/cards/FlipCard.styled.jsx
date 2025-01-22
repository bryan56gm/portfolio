import styled from 'styled-components'
import device from '../../styles/responsive/breakpoints'

const FlipCardContainer = styled.article`
    position: relative;
    max-width: 455px;
    width: 100%;
    max-height: 300px;
    height: 65vw;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 8px 32px -4px rgba(0, 0, 0, 0.5), 0 4px 12px -2px rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.3s ease;
    &:hover{
        box-shadow: 0 12px 40px -4px rgba(0, 0, 0, 0.6), 0 6px 16px -2px rgba(0, 0, 0, 0.75);
    }
`

const FlipCardBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.5s ease;
    &.flipped {
        transform: rotateY(180deg);
    }
`

const FlipCardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    &:hover h3{
        bottom: -50%;
    }
`

const FlipCardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: linear-gradient(to bottom right, #FF2E00 1%, #fa6645 20%, #fa6645 78%, #FF2E00 98%);
    transform: rotateY(180deg);
    padding: 1.5rem 2rem;

    display: flex; 
    flex-direction: column; 
    gap: 1rem;

    & img{
        width: 16px;
    }
`

const FlipCardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const FlipCardTitle = styled.h3`
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100.3%;
    height: 50%;
    transition: bottom 1s;

    background: linear-gradient(to bottom right, #FF2E00 1%, #fa6645 20%, #fa6645 78%, #FF2E00 98%);
    clip-path: polygon(0% 0%, 0% 0%, 0.073% 0.447%, 0.32% 1.75%, 0.783% 3.85%, 1.504% 6.688%, 2.525% 10.204%, 3.887% 14.341%, 5.634% 19.039%, 7.807% 24.239%, 10.447% 29.883%, 13.598% 35.912%, 13.598% 35.912%, 16.588% 41.356%, 18.968% 45.413%, 21.113% 48.276%, 23.398% 50.135%, 26.196% 51.182%, 29.882% 51.609%, 34.83% 51.608%, 41.414% 51.37%, 50.01% 51.086%, 60.99% 50.949%, 60.99% 50.949%, 72.044% 51.735%, 80.787% 53.867%, 87.491% 57.009%, 92.425% 60.825%, 95.86% 64.977%, 98.065% 69.13%, 99.309% 72.945%, 99.864% 76.088%, 99.999% 78.22%, 99.984% 79.005%, 99.984% 100%, 0% 100%, 0% 0%);
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding-bottom: 1.5rem;
`

const FlipCardIcons = styled.div`
    width: 100%;
    padding: 10px 15px;
    position: absolute;
    top: 0;
    display: flex;
    gap: 1rem;
    ${device.tablet`
        padding: 15px 20px;
    `}
`

const FlipCardIcon = styled.img`
    width: 20px;
    cursor: pointer;
`

const FlipCarText = styled.p`
    display: grid;
    align-items: center;
    flex-grow: 1; 
    overflow-y: auto; 
    margin: 0; 

    scrollbar-width: thin; 
    scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.1); 
    -ms-overflow-style: -ms-autohiding-scrollbar; 
        
    &::-webkit-scrollbar {
        width: 8px; 
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2); 
        border-radius: 4px; 
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: rgba(0, 0, 0, 0.3); 
    }

    &::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1); 
    }
`

export { FlipCardContainer, FlipCardBox, FlipCardFront, FlipCardBack, FlipCardImg, FlipCardTitle, FlipCardIcons, FlipCardIcon, FlipCarText }
