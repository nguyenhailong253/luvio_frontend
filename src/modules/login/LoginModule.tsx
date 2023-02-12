import React, { useState } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { saveLoggedInUserDetails } from '../user/userSlice'
import LoginForm from './components/LoginForm'
import { useLoginMutation } from './loginApiSlice'
import type { FormEvent } from '../../common/types'

const LoginModule: React.FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const [username, setUserName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [login, { isLoading, isSuccess, error, isError }] = useLoginMutation()

  const onSubmitClicked = async (e: FormEvent): Promise<void> => {
    e.preventDefault() // INFO: https://stackoverflow.com/a/50193253/8749888
    const respone = await login({ username, email, password }).unwrap()
    dispatch(saveLoggedInUserDetails({ ...respone }))
  }

  return (
    <LoginForm
      variables={{ email, password }}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmitClicked={onSubmitClicked}
    />
  )
}

export default LoginModule
