import type { Nullish, NumberNullish } from '../../common/types'
import type { Dayjs } from 'dayjs'

export interface UserState {
  username: string
  email: string
  isLoggedIn: boolean
  userId: NumberNullish
  token: string
  firstName: string
  lastName: string
  dateOfBirth: Dayjs | Nullish
  mobile: string
  isActive: boolean
}
