import apiSlice from '../../redux/apiSlice'
import type { ProfileListResponse } from './types'

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfiles: builder.query({
      query: () => '/profiles/',
      transformResponse: (response: ProfileListResponse) => ({
        profiles: response.profiles
      })
    })
  })
})

export const { useGetProfilesQuery } = profileApiSlice
