import type { NumberNullish, Nullish } from '../../common/types'
import type { RootState } from '../../redux/store'
import type { Dayjs } from 'dayjs'
export const getUsername = (state: RootState): string => state.user.username
export const getEmail = (state: RootState): string => state.user.email
export const getIsLoggedIn = (state: RootState): boolean => state.user.isLoggedIn
export const getUserId = (state: RootState): NumberNullish => state.user.userId
export const getToken = (state: RootState): string => state.user.token
export const getFirstName = (state: RootState): string => state.user.firstName
export const getLastName = (state: RootState): string => state.user.lastName
export const getDateOfBirth = (state: RootState): Dayjs | Nullish => state.user.dateOfBirth
export const getMobile = (state: RootState): string => state.user.mobile
export const getIsActive = (state: RootState): boolean => state.user.isActive
