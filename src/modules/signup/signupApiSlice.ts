import apiSlice from '../../redux/apiSlice'
import type { SignupResponse } from './types'

export const signupApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submit: builder.mutation({
      query: (signupDetails) => ({
        url: '/registration/',
        method: 'POST',
        body: {
          email: signupDetails.email,
          username: signupDetails.username,
          password: signupDetails.password,
          first_name: signupDetails.firstName,
          last_name: signupDetails.lastName,
          date_of_birth: signupDetails.dateOfBirth,
          mobile: signupDetails.mobile,
          is_active: signupDetails.isActive
        }
      }),
      transformResponse: (responseData: SignupResponse) => ({
        username: responseData.username,
        token: responseData.token,
        email: responseData.email,
        userId: responseData.user_id
      })
    })
  })
})

export const { useSubmitMutation } = signupApiSlice
