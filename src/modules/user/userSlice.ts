import { createSlice } from '@reduxjs/toolkit'
import type { UserState } from './types'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState: UserState = {
  username: '',
  email: '',
  isLoggedIn: false,
  userId: undefined,
  token: '',
  firstName: '',
  lastName: '',
  dateOfBirth: undefined,
  mobile: '',
  isActive: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveLoggedInUserDetails: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username
      state.email = action.payload.email
      state.isLoggedIn = action.payload.isLoggedIn
      state.userId = action.payload.userId
      state.token = action.payload.token
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.dateOfBirth = action.payload.dateOfBirth
      state.mobile = action.payload.mobile
      state.isActive = action.payload.isActive
    }
  }
})
export const { saveLoggedInUserDetails } = userSlice.actions

export default userSlice.reducer
