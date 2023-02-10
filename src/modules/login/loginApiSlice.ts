import apiSlice from '../../redux/apiSlice'
import type { LoginResponse } from './types'

export const loginApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submit: builder.mutation({
      query: (loginDetails) => ({
        url: '/login/',
        method: 'POST',
        body: { ...loginDetails }
      }),
      transformResponse: (responseData: LoginResponse) => ({
        username: responseData.username,
        token: responseData.token,
        email: responseData.email,
        userId: responseData.user_id
      })
    })
  })
})

export const { useSubmitMutation } = loginApiSlice
