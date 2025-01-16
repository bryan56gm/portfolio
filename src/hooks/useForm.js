import { useState } from 'react'
// Validation
import { validateEmail } from '../utils/validation'

const useForm = ({ contact }) => {
  const [fields, setFields] = useState({})
  const [errors, setErrors] = useState({})

  const updateFields = (e) => {
    const newFields = { ...fields, [e.target.name]: e.target.value }
    setFields(newFields)
  }

  const validateFields = () => {
    const newErrors = {
      name: contact?.errorName,
      mail: contact?.errorMail,
      message: contact?.errorMessage
    }

    if (fields.name?.length >= 3) {
      delete newErrors.name
    }
    if (fields.mail && validateEmail(fields.mail)) {
      delete newErrors.mail
    }

    if (fields.message?.trim().length > 0) {
      delete newErrors.message
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return { fields, errors, updateFields, validateFields }
}

export default useForm
