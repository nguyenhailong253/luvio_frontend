import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import React from 'react'
import ProfileCards from './ProfileCards'
import ProfileListBanner from './ProfileListBanner'

const ProfileList: React.FunctionComponent = () => (
  <React.Fragment>
    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
    <CssBaseline />
    <ProfileListBanner />
    <ProfileCards/>
  </React.Fragment>
)

export default ProfileList
