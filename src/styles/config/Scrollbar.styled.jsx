import { css } from 'styled-components'

const ScrollbarStyled = css`
  ::-webkit-scrollbar{
    width: .6rem;
    border-radius:  .5rem;
    background-color: hsl(19, 8%, 75%);
  }

  ::-webkit-scrollbar-thumb{
    border-radius:  .5rem;
    background-color: var(--scroll-color);
  }

  ::-webkit-scrollbar-thumb:hover{
    background-color: var(--scroll-color-alt);
  }
`

export { ScrollbarStyled }
