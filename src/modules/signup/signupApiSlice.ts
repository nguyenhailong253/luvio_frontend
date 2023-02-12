import DATE_FORMAT from '../../common/constants'
import apiSlice from '../../redux/apiSlice'
import type { SignupResponse } from './types'

export const signupApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (details) => ({
        url: '/registration/',
        method: 'POST',
        body: {
          email: details.email,
          username: details.username,
          password: details.password,
          first_name: details.firstName,
          last_name: details.lastName,
          date_of_birth: details.dateOfBirth?.format(DATE_FORMAT),
          mobile: details.mobile,
          is_active: details.isActive
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

export const { useRegisterMutation } = signupApiSlice
