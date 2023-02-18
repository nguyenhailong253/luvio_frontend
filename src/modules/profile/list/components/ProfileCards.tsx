import AddIcon from '@mui/icons-material/Add'
import { Avatar } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Container from '@mui/material/Container'
import Fab from '@mui/material/Fab'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getProfiles } from '../selectors'
import type { Profile } from '../../types'

const ProfileCards: React.FunctionComponent = () => {
  const navigate = useNavigate()
  const profiles = useSelector(getProfiles)
  const cardHeader = (profile: Profile): JSX.Element => (
    <CardHeader
      title={profile.profileType.toUpperCase()}
      titleTypographyProps={{ align: 'center' }}
      subheaderTypographyProps={{
        align: 'center'
      }}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[700]
      }}
      subheader={
        moment(profile.dateCreated).isValid()
          ? 'since'.concat(' ', moment(profile.dateCreated).format('DD MMM YYYY'))
          : undefined
      }
    />
  )

  const cardContent = (profile: Profile): JSX.Element => (
    <>
      <Link to={`/profiles/${String(profile.id)}}`}>
        <CardContent sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 2
        }}>
          <Avatar src={profile.avatar as string | undefined} sx={{ width: 150, height: 150 }}/>
        </CardContent>
      </Link>
      <CardContent>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          height={80}
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '4',
            WebkitBoxOrient: 'vertical'
          }}
        >
          {profile.profilePitch}
        </Typography>
      </CardContent>
    </>
  )

  const cardAction = (profile: Profile): JSX.Element => (
    <CardActions>
      <Button
        fullWidth
        variant={'contained'}
        onClick={() => { navigate(`/profiles/${String(profile.id)}`) }}
      >
        Select Profile
      </Button>
    </CardActions>
  )

  const addProfileButton = (): JSX.Element => (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
    >
      <Card>
        <Box
          height={458.52}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Fab color="primary" aria-label="add" size='large' variant='extended'>
            <AddIcon sx={{ mr: 1 }}/>
              Create profile
          </Fab>
        </Box>
      </Card>
    </Grid>
  )

  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems={'center'} justifyContent={'space-around'}>
        {profiles.map((profile) => (
          <Grid
            item
            key={profile.id}
            xs={12}
            sm={6}
            md={4}
          >
            <Card>
              {cardHeader(profile)}
              {cardContent(profile)}
              {cardAction(profile)}
            </Card>
          </Grid>
        ))}
        {profiles.length < 3 && addProfileButton()}
      </Grid>
    </Container>
  )
}

export default ProfileCards
