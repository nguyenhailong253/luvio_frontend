import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface SignupState {
  username: string
  password: string
}

// Define the initial state using that type
const initialState: SignupState = {
  username: '',
  password: ''
}

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    submit: (state, action: PayloadAction<SignupState>) => {
      state.username = action.payload.username
      state.password = action.payload.password
    }
  }
})
export const { submit } = signupSlice.actions
// Other code such as selectors can use the imported `RootState` type
export const selectUsername = (state: RootState): string => state.signup.username

export default signupSlice.reducer
