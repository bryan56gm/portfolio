import React, { useContext } from 'react'
// Styled Components
import { FormLetter, FormContent, FormField, FormLabel, FormInput, FormError, FormTextArea, FormElement } from './Form.styled'
// Component
import Button from '../button/Button'
// Language Context
import { LanguageContext } from '../../contexts/LanguageContext'
import useForm from '../../hooks/useForm'

const Form = () => {
  const { languageData: { contact } } = useContext(LanguageContext)
  const { errors, updateFields, validateFields } = useForm({ contact })

  const handleSubmit = (e) => {
    (validateFields())
      ? e.target.submit()
      : e.preventDefault()
  }

  return (
    <FormContent>
      <FormLetter src='/assets/icons/form-letter.svg' />

      <FormElement
        action='https://formsubmit.co/00987a194a80c687f5929d23a6bcc9b0'
        method='POST'
        onSubmit={handleSubmit}
        noValidate
      >
        <FormField onChange={updateFields}>
          <FormLabel htmlFor='name'>{contact?.name}</FormLabel>
          <FormInput type='text' id='name' name='name' $error={errors.name} />
          {errors.name && <FormError>{errors.name}</FormError>}
        </FormField>

        <FormField onChange={updateFields}>
          <FormLabel htmlFor='mail'>{contact?.mail}</FormLabel>
          <FormInput type='email' id='mail' name='mail' $error={errors.mail} />
          {errors.mail && <FormError>{errors.mail}</FormError>}
        </FormField>

        <FormField onChange={updateFields}>
          <FormLabel htmlFor='subject'>{contact?.subject}</FormLabel>
          <FormInput type='text' id='subject' name='subject' />
        </FormField>

        <FormField onChange={updateFields}>
          <FormLabel htmlFor='message'>{contact?.message}</FormLabel>
          <FormTextArea id='message' name='message' $error={errors.message} />
          {errors.message && <FormError>{errors.message}</FormError>}
        </FormField>

        <Button icon='send'>{contact?.button}</Button>
      </FormElement>
    </FormContent>
  )
}

export default Form
