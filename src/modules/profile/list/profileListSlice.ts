import { createSlice } from '@reduxjs/toolkit'
import type { ProfileListState } from '../types'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: ProfileListState = {
  profiles: []
}

const profileListSlice = createSlice({
  name: 'profileList',
  initialState,
  reducers: {
    saveProfiles: (state, action: PayloadAction<ProfileListState>) => {
      state.profiles = action.payload.profiles
    }
  }
})
export const { saveProfiles } = profileListSlice.actions

export default profileListSlice.reducer
