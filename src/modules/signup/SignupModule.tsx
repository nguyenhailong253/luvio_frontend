import React, { useState } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { saveLoginDetails } from '../login/loginSlice'
import SignupForm from './components/SignupForm'
import { useSubmitMutation } from './signupApiSlice'
import { saveSignupDetails } from './signupSlice'

const SignupModule: React.FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [retypedPassword, setRetypedPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobile, setMobile] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')

  const [submit, { isLoading, isSuccess, error, isError }] = useSubmitMutation()

  const onSubmitClicked = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const isActive = true
    const respone = await submit({ username, email, password, firstName, lastName, dateOfBirth, mobile, isActive }).unwrap()
    dispatch(saveLoginDetails({ ...respone }))
    dispatch(saveSignupDetails({ firstName, lastName, dateOfBirth, mobile, isActive }))
  }

  return (
    <SignupForm
      username={username}
      email={email}
      password={password}
      retypedPassword={retypedPassword}
      firstName={firstName}
      lastName={lastName}
      dateOfBirth={dateOfBirth}
      mobile={mobile}
      setUsername={setUsername}
      setEmail={setEmail}
      setPassword={setPassword}
      setRetypedPassword={setRetypedPassword}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setDateOfBirth={setDateOfBirth}
      setMobile={setMobile}
      onSubmitClicked={onSubmitClicked}
    />
  )
}

export default SignupModule
