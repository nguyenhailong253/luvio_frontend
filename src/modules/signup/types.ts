import type { Nullish } from '../../common/types'
import type { Dayjs } from 'dayjs'
import type { SetStateAction } from 'react'
export interface SignupState {
  firstName: string
  lastName: string
  dateOfBirth: Dayjs | Nullish
  mobile: string
  isActive: boolean
}

export interface SignupAction {
  firstName: string
  lastName: string
  dateOfBirth: Dayjs | Nullish
  mobile: string
  isActive: boolean
}

export interface SignupResponse {
  token: string
  username: string
  email: string
  user_id: number
}

export interface SignupVariableProps {
  username: string
  email: string
  password: string
  retypedPassword: string
  firstName: string
  lastName: string
  dateOfBirth: Dayjs | Nullish
  mobile: string
}

export interface SignupFormProps {
  variables: SignupVariableProps
  onSubmitClicked: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  setUsername: (value: SetStateAction<string>) => void
  setEmail: (value: SetStateAction<string>) => void
  setPassword: (value: SetStateAction<string>) => void
  setRetypedPassword: (value: SetStateAction<string>) => void
  setFirstName: (value: SetStateAction<string>) => void
  setLastName: (value: SetStateAction<string>) => void
  setDateOfBirth: (value: SetStateAction<Dayjs | Nullish>) => void
  setMobile: (value: SetStateAction<string>) => void
}
