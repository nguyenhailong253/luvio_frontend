import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useSelector } from 'react-redux'
import { getProfiles } from '../selectors'

const ProfileListBanner: React.FunctionComponent = () => {
  const numProfiles = useSelector(getProfiles).length
  return (
    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Select your profile
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p">
        {numProfiles < 3
          ? 'Select your existing profile or create a new one'
          : 'Select your existing profile'}
      </Typography>
    </Container>
  )
}

export default ProfileListBanner
