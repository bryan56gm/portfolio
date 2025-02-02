import React from 'react'
// import PropTypes from 'prop-types';
import styled from 'styled-components'
import useChangeTheme from '../../hooks/useChangeTheme'
import { MoonIcon, SunIcon } from '../icons/ThemeIcons'

const ThemeIcon = styled.div`
    width: 22px;
    stroke: white;
    stroke-width: 1.2px;
`

const ThemeToggle = () => {
  const [theme, changeTheme] = useChangeTheme()

  return (
    <ThemeIcon onClick={changeTheme}>
      {theme === 'light'
        ? <MoonIcon />
        : <SunIcon />}
    </ThemeIcon>
  )
}

export default ThemeToggle
