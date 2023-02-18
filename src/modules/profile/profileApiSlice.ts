import apiSlice from '../../redux/apiSlice'
import type { Profile, ProfileListResponse, ProfileListState } from './types'

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfiles: builder.query<ProfileListState, void>({
      query: () => '/profiles/',
      transformResponse: (response: ProfileListResponse) => {
        const profiles: Profile[] = []
        response.forEach(profile => {
          profiles.push({
            id: profile.id,
            avatar: profile.avatar,
            profilePitch: profile.profile_pitch,
            profileUri: profile.profile_uri,
            dateCreated: profile.date_created,
            profileType: profile.profile_type
          })
        })
        profiles.sort((a, b) => a.profileType.localeCompare(b.profileType))
        return { profiles }
      }
    })
  })
})

export const { useGetProfilesQuery } = profileApiSlice
