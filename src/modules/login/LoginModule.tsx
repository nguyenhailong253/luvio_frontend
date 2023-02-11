import React, { useState } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import LoginForm from './components/LoginForm'
import { useSubmitMutation } from './loginApiSlice'
import { saveLoginDetails } from './loginSlice'

const LoginModule: React.FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submit, { isLoading, isSuccess, error, isError }] = useSubmitMutation()

  const onSubmitClicked = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault() // INFO: https://stackoverflow.com/a/50193253/8749888
    const respone = await submit({ username, email, password }).unwrap()
    dispatch(saveLoginDetails({ ...respone }))
  }

  return (
    <LoginForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmitClicked={onSubmitClicked}
    />
  )
}

export default LoginModule
