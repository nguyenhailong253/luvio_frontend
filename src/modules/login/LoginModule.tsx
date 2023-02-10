import { Input } from '@mui/material'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { useSubmitMutation } from './loginApiSlice'
import { saveLoginDetails } from './loginSlice'

const LoginModule: React.FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submit, { isLoading, isSuccess, error, isError }] = useSubmitMutation()

  const onSubmitClicked = async (): Promise<void> => {
    const respone = await submit({ username, email, password }).unwrap()
    console.log('test error', error, isError)
    dispatch(saveLoginDetails({ ...respone }))
  }

  return (
    <div>
      <Input id='email' type='text' placeholder='Email' value={email} onChange={e => { setEmail(e.target.value) }}/>
      <Input id='username' type='text' placeholder='Username' value={username} onChange={e => { setUserName(e.target.value) }}/>
      <Input id='password' type='text' placeholder='Passowrd' value={password} onChange={e => { setPassword(e.target.value) }}/>
      <Button variant="contained" onClick={onSubmitClicked}>
        Hello World {username}, {password}
      </Button>
    </div>
  )
}

export default LoginModule
