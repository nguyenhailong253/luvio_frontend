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
  const [errorMsg, setErrorMsg] = useState<string>('')

  const [register, { isLoading, isSuccess, error, isError }] = useRegisterMutation()

  const onSubmitClicked = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    const isActive = true
    try {
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
      setErrorMsg('')
    } catch (err: any) {
      if (err.data !== undefined && ('email' in err.data || 'username' in err.data)) {
        setErrorMsg('An account with this username or email already exists!')
      } else {
        setErrorMsg('Something went wrong - please try again!')
      }
    }
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
        mobile,
        errorMsg
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
