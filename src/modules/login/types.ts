import type { Nullish, NumberNullish } from '../../common/types'
import type { Dayjs } from 'dayjs'
import type { SetStateAction } from 'react'

export interface LoginResponse {
  token: string
  username: string
  email: string
  user_id: NumberNullish
  first_name: string
  last_name: string
  date_of_birth: Dayjs | Nullish
  mobile: string
  isActive: boolean
  isLoggedIn: boolean
}

export interface LoginVariableProps {
  email: string
  password: string
}

export interface LoginFormProps {
  onSubmitClicked: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  variables: LoginVariableProps
  setEmail: (value: SetStateAction<string>) => void
  setPassword: (value: SetStateAction<string>) => void
}
