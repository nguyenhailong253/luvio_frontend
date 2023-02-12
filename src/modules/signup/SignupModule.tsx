import React, { useState } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { saveLoggedInUserDetails } from '../user/userSlice'
import SignupForm from './components/SignupForm'
import { useRegisterMutation } from './signupApiSlice'
import type { FormEvent, Nullish } from '../../common/types'
import type { Dayjs } from 'dayjs'

const SignupModule: React.FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [retypedPassword, setRetypedPassword] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [mobile, setMobile] = useState<string>('')
  const [dateOfBirth, setDateOfBirth] = useState<Dayjs | Nullish>()

  const [register, { isLoading, isSuccess, error, isError }] = useRegisterMutation()

  const onSubmitClicked = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    const isActive = true
    const response = await register(
      {
        username,
        email,
        password,
        firstName,
        lastName,
        dateOfBirth,
        mobile,
        isActive
      }).unwrap()
    dispatch(saveLoggedInUserDetails({ ...response }))
  }

  return (
    <SignupForm
      variables={{
        username,
        email,
        password,
        retypedPassword,
        firstName,
        lastName,
        dateOfBirth,
        mobile
      }}
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
