import { Input } from '@mui/material'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { saveLoginDetails } from '../login/loginSlice'
import { useSubmitMutation } from './signupApiSlice'
import { saveSignupDetails } from './signupSlice'

const SignupModule: React.FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [retypedPassword, setRetypedPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobile, setMobile] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')

  const [submit, { isLoading, isSuccess, error, isError }] = useSubmitMutation()

  const onSubmitClicked = async (): Promise<void> => {
    const isActive = true
    const respone = await submit({ username, email, password, firstName, lastName, dateOfBirth, mobile, isActive }).unwrap()
    console.log('test error', error, isError)
    dispatch(saveLoginDetails({ ...respone }))
    dispatch(saveSignupDetails({ firstName, lastName, dateOfBirth, mobile, isActive }))
  }

  return (
    <div>
      <Input id='email' type='text' placeholder='Email' value={email} onChange={e => { setEmail(e.target.value) }}/>
      <Input id='username' type='text' placeholder='Username' value={username} onChange={e => { setUserName(e.target.value) }}/>
      <Input id='password' type='text' placeholder='Passowrd' value={password} onChange={e => { setPassword(e.target.value) }}/>
      <Input id='retypedPassword' type='text' placeholder='Re-type your passowrd' value={retypedPassword} onChange={e => { setRetypedPassword(e.target.value) }}/>
      <Input id='firstName' type='text' placeholder='Fist name' value={firstName} onChange={e => { setFirstName(e.target.value) }}/>
      <Input id='lastName' type='text' placeholder='Last name' value={lastName} onChange={e => { setLastName(e.target.value) }}/>
      <Input id='mobile' type='text' placeholder='Mobile' value={mobile} onChange={e => { setMobile(e.target.value) }}/>
      <Input id='dateOfBirth' type='text' placeholder='Date of birth' value={dateOfBirth} onChange={e => { setDateOfBirth(e.target.value) }}/>
      <Button variant="contained" onClick={onSubmitClicked}>
        Hello World {username}, {password}
      </Button>
    </div>
  )
}

export default SignupModule
