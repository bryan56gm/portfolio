import React from 'react'
import { SocialMenu, SocialLink } from './Social.styled'
import { GitubIcon, LinkedinIcon, PDFIcon } from '../icons/SocialIcons'

const Social = () => {
  return (
    <SocialMenu>
      <li className='social__icon'>
        <SocialLink href='https://www.linkedin.com/in/bryangm/' target='_blank' rel='noopener noreferrer'>
          <LinkedinIcon />
        </SocialLink>
      </li>
      <li className='social__icon'>
        <SocialLink href='https://github.com/bryan56gm' target='_blank' rel='noopener noreferrer'>
          <GitubIcon />
        </SocialLink>
      </li>
      <li className='social__icon'>
        <SocialLink href='/assets/files/CV-Bryan-GM-ES.pdf' download>
          <PDFIcon />
        </SocialLink>
      </li>
    </SocialMenu>
  )
}

export default Social
