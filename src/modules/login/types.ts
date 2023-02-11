import type { SetStateAction } from 'react'

export interface LoginState {
  username: string
  email: string
  isLoggedIn: boolean
  userId: number | null
  token: string | null
}

export interface LoginAction {
  username: string
  email: string
  token: string
  userId: number
}

export interface LoginResponse {
  token: string
  username: string
  email: string
  user_id: number
}

export interface LoginFormProps {
  onSubmitClicked: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  email: string
  password: string
  setEmail: (value: SetStateAction<string>) => void
  setPassword: (value: SetStateAction<string>) => void
}
