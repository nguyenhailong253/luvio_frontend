import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import isEmail from 'validator/lib/isEmail'

interface EmailInputPropsType {
  onEmailChange: (value: string) => void
  email: string
  autoFocus?: boolean
}

const EmailInput: React.FunctionComponent<EmailInputPropsType> = (props) => {
  const { email, onEmailChange, autoFocus } = props
  const [dirty, setDirty] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const handleChange: any = (newEmail: string) => {
    if (isEmail(newEmail)) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
    setDirty(true)
    onEmailChange(newEmail)
  }

  const showError = dirty && !isValid

  return (
    <TextField
      error={showError}
      helperText={showError && 'Invalid email.'}
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus={autoFocus}
      value={email}
      onChange={e => { handleChange(e.target.value) }}
    />
  )
}

export default EmailInput
