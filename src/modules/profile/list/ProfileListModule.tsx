import React from 'react'
import { useAppDispatch } from '../../../redux/hooks'
import { useGetProfilesQuery } from '../profileApiSlice'
import ProfileList from './components/ProfileList'
import { saveProfiles } from './profileListSlice'

const ProfileListModule: React.FunctionComponent = () => {
  const dispatch = useAppDispatch()

  const {
    data: profiles = { profiles: [] },
    isLoading,
    isSuccess,
    isError
  } = useGetProfilesQuery()

  dispatch(saveProfiles(profiles))

  return <ProfileList />
}

export default ProfileListModule
