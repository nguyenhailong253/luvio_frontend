import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface LoginState {
  username: string
  password: string
}

// Define the initial state using that type
const initialState: LoginState = {
  username: 'TestUsername',
  password: ''
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // generates action like {type: 'login/submit'}
    submit: (state, action: PayloadAction<LoginState>) => {
      console.log(action)
      state.username = action.payload.username
      state.password = action.payload.password
    }
  }
})

/**
 *
// The function below is called a thunk and allows us to perform async logic.
// It can be dispatched like a regular action: `dispatch(incrementAsync(10))`.
// This will call the thunk with the `dispatch` function as the first argument.
// Async code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// the outside "thunk creator" function
const fetchUserById = userId => {
  // the inside "thunk function"
  return async (dispatch, getState) => {
    try {
      // make an async call in the thunk
      const user = await userAPI.fetchById(userId)
      // dispatch an action when we get the response back
      dispatch(userLoaded(user))
    } catch (err) {
      // If something went wrong, handle it here
    }
  }
}
 */

export const { submit } = loginSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUsername = (state: RootState): string => state.login.username

export default loginSlice.reducer
