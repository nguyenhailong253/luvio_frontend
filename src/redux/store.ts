import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../modules/login/loginSlice'
import apiSlice from './apiSlice'

import type { ThunkAction, AnyAction } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    login: loginReducer
    // signup: signupReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// a reusable AppThunk type - use this type whenever you write a thunk:
// Return type of thunk func, state type used by getState, any extra args, known types of actions that can be dispatched
/**
 * Note that this assumes that there is no meaningful return value from the thunk.
 * If your thunk returns a promise and you want to use the returned promise after
 * dispatching the thunk, you'd want to use this as AppThunk<Promise<SomeReturnType>>
 */
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

export default store
