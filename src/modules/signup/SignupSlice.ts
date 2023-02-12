import { createSlice } from '@reduxjs/toolkit'
import type { SignupAction, SignupState } from './types'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState: SignupState = {
  firstName: '',
  lastName: '',
  dateOfBirth: undefined,
  mobile: '',
  isActive: false
}

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    saveSignupDetails: (state, action: PayloadAction<SignupAction>) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.dateOfBirth = action.payload.dateOfBirth
      state.mobile = action.payload.mobile
      state.isActive = action.payload.isActive
    }
  }
})
export const { saveSignupDetails } = signupSlice.actions

export default signupSlice.reducer
