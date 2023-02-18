import type { StringNullish } from '../../common/types'

export interface ProfileListResponse extends Array<ProfileResponse> {}

export interface ProfileListState {
  profiles: Profile[]
}

export interface Profile {
  id: number
  avatar: StringNullish
  profilePitch: StringNullish
  profileUri: StringNullish
  dateCreated: string
  profileType: string
}

export interface ProfileResponse {
  id: number
  avatar: StringNullish
  profile_pitch: StringNullish
  profile_uri: StringNullish
  date_created: string
  profile_type: string
}
