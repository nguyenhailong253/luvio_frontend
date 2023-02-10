export interface SignupState {
  firstName: string
  lastName: string
  dateOfBirth: string
  mobile: string
  isActive: boolean
}

export interface SignupAction {
  firstName: string
  lastName: string
  dateOfBirth: string
  mobile: string
  isActive: boolean
}

export interface SignupResponse {
  token: string
  username: string
  email: string
  user_id: number
}
