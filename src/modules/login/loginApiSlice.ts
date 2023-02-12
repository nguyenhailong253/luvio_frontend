import apiSlice from '../../redux/apiSlice'
import type { LoginResponse } from './types'

export const loginApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginDetails) => ({
        url: '/login/',
        method: 'POST',
        body: { ...loginDetails }
      }),
      transformResponse: (response: LoginResponse) => ({
        username: response.username,
        token: response.token,
        email: response.email,
        userId: response.user_id,
        firstName: response.first_name,
        lastName: response.last_name,
        dateOfBirth: response.date_of_birth,
        mobile: response.mobile,
        isActive: response.is_active,
        isLoggedIn: true
      })
    })
  })
})

export const { useLoginMutation } = loginApiSlice
