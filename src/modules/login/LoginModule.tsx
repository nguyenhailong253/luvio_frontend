import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hooks'
import { saveLoggedInUserDetails } from '../user/userSlice'
import LoginForm from './components/LoginForm'
import { useLoginMutation } from './loginApiSlice'
import type { FormEvent } from '../../common/types'

const LoginModule: React.FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [username, setUserName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation()

  const onSubmitClicked = async (e: FormEvent): Promise<void> => {
    e.preventDefault() // INFO: https://stackoverflow.com/a/50193253/8749888
    try {
      const respone = await login({ username, email, password }).unwrap()
      dispatch(saveLoggedInUserDetails({ ...respone }))
      setErrorMsg('')
      navigate('/profiles')
    } catch (err: any) {
      if (err.data.detail !== undefined) {
        setErrorMsg(err.data.detail)
      } else {
        setErrorMsg('Something went wrong - please try again!')
      }
    }
  }

  return (
    <LoginForm
      variables={{ email, password, errorMsg }}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmitClicked={onSubmitClicked}
    />
  )
}

export default LoginModule
