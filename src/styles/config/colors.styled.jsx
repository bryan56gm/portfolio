import { css } from 'styled-components'

const ColorsStyled = css`
    :root {
        /*------------ MAIN COLOR PALLETE------------*/
        --first-color: #FF2E00;
        --first-color-alt: #ffa500;
        /*------------ BLOCKS - CONTAINERS ------------*/
        --body-color: linear-gradient(139.98deg, #0F002C 10.69%, #1A014A 20.26%, #19014A 30.76%, #2A007E 40.02%, rgba(25, 0, 74, 0.941257) 54.12%, rgba(25, 0, 74, 0.952228) 55.88%, rgba(21, 1, 63, 0.983651) 78.08%, #0B0021 83.04%);
        /*------------ BLOCKS - CONTAINERS ------------*/
        --scroll-color: hsl(19, 8%, 60%);
        --scroll-color-alt: hsl(19, 8%, 50%);
    }

    body.dark{
        /*------------ BLOCKS - CONTAINERS ------------*/
        --body-color: hsl(19, 12%, 8%);
        /*------------ BLOCKS - CONTAINERS ------------*/
        --scroll-color: hsl(19, 55%, 62%);
        --scroll-color-alt: hsl(19, 56%, 57%);

        position: relative;
    }

    body.dark::after{
        content: "";
        position: absolute;
        inset: 0;
        background-image: url('/assets/img/noisy.webp');
        pointer-events: none;
        user-select: none;
        
        @media screen and (max-width: 568px){
            opacity: .6;
        }
    }
`

export { ColorsStyled }
