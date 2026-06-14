import { useState } from 'react'

type ContactValues = {
  name: string
  email: string
  message: string
}

type ContactErrors = Partial<Record<keyof ContactValues, string>>

const initialValues: ContactValues = {
  name: '',
  email: '',
  message: '',
}

function validate(values: ContactValues) {
  const nextErrors: ContactErrors = {}

  if (values.name.trim().length < 2) {
    nextErrors.name = 'Please enter your full name.'
  }

  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    nextErrors.email = 'Enter a valid email address.'
  }

  if (values.message.trim().length < 10) {
    nextErrors.message = 'Message should be at least 10 characters.'
  }

  return nextErrors
}

export function useContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = () => {
    const nextErrors = validate(values)

    setErrors(nextErrors)
    setSubmitted(Object.keys(nextErrors).length === 0)

    if (Object.keys(nextErrors).length === 0) {
      setValues(initialValues)
    }

    return nextErrors
  }

  return { values, errors, submitted, handleChange, handleSubmit }
}