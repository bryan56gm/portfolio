import React, { useContext } from 'react'
// Components
import Address from '../components/address/Address'
import Form from '../components/form/Form'
// React Helmet
import { Helmet } from 'react-helmet-async'
// Styled Components
import { Touch } from '../components/touch/Touch.styled'
// Language Context
import { LanguageContext } from '../contexts/LanguageContext'
// Hook Scroll Reveal
import { useContactScrollReveal } from '../hooks/useScrollReveal'

const Contact = () => {
  const { languageData: { title } } = useContext(LanguageContext)
  useContactScrollReveal()

  return (
    <>
      <Helmet>
        <title>{title?.contact}</title>
        <link rel='canonical' href='https://bryangm.com/contact' />
      </Helmet>

      <main>
        <Touch>
          <Address />
          <Form />
        </Touch>
      </main>
    </>
  )
}

export default Contact
