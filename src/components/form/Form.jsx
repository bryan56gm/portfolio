import React, { useContext } from 'react'
// Styled Components
import { FormLetter, FormContent, FormField, FormLabel, FormInput, FormTextArea } from './Form.styled'
// Component
import Button from '../button/Button'
// Language Context
import { LanguageContext } from '../../contexts/LanguageContext'

const Form = () => {
  const { languageData: { contact } } = useContext(LanguageContext)

  return (
    <FormLetter>
      <FormContent action='https://formsubmit.co/00987a194a80c687f5929d23a6bcc9b0' method='POST'>
        <FormField>
          <FormLabel htmlFor='name'>{contact?.name}</FormLabel>
          <FormInput type='text' id='name' name='Name' />
        </FormField>
        <FormField>
          <FormLabel htmlFor='mail'>{contact?.mail}</FormLabel>
          <FormInput type='email' id='mail' name='Mail' />
        </FormField>
        <FormField>
          <FormLabel htmlFor='subject'>{contact?.subject}</FormLabel>
          <FormInput type='text' id='subject' name='Subject' />
        </FormField>
        <FormField>
          <FormLabel htmlFor='message'>{contact?.message}</FormLabel>
          <FormTextArea id='message' name='Message' />
        </FormField>

        <Button icon='send'>{contact?.button}</Button>
      </FormContent>
    </FormLetter>
  )
}

export default Form
