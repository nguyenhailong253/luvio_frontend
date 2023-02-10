import { createSlice } from '@reduxjs/toolkit'
import type { LoginAction, LoginState } from './types'
import type { PayloadAction, CaseReducer } from '@reduxjs/toolkit'

const initialState: LoginState = {
  username: '',
  email: '',
  isLoggedIn: false,
  userId: null,
  token: null
}

export const loginSlice = createSlice({
  initialState,
  name: 'loginSlice',
  reducers: {
    logout: () => initialState,
    saveLoginDetails: (state, action: PayloadAction<LoginAction>) => {
      state.username = action.payload.username
      state.email = action.payload.email
      state.isLoggedIn = true
      state.token = action.payload.token
      state.userId = action.payload.userId
    }
  }
})

export default loginSlice.reducer

export const { logout, saveLoginDetails } = loginSlice.actions
