import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Alert from '@mui/material/Alert'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import React from 'react'
import DATE_FORMAT from '../../../common/constants'
import Copyright from '../../../components/Copyright'
import EmailInput from '../../../components/EmailInput'
import MobilePhoneInput from '../../../components/MobilePhoneInput'
import type { Nullish } from '../../../common/types'
import type { SignupFormProps } from '../types'
import type { Dayjs } from 'dayjs'

const theme = createTheme()

const SignupForm: React.FunctionComponent<SignupFormProps> = (props) => {
  const {
    variables,
    onSubmitClicked,
    setUsername,
    setEmail,
    setPassword,
    setRetypedPassword,
    setFirstName,
    setLastName,
    setDateOfBirth,
    setMobile
  } = props
  const {
    username,
    email,
    password,
    retypedPassword,
    firstName,
    lastName,
    dateOfBirth,
    mobile,
    errorMsg
  } = variables

  const errorAlert = errorMsg !== '' && (
    <Grid item xs={12}>
      <Alert variant="outlined" severity="error">
        {errorMsg}
      </Alert>
    </Grid>
  )

  const firstNameComponent = (
    <Grid item xs={12} sm={6}>
      <TextField
        autoComplete="given-name"
        name="firstName"
        required
        fullWidth
        id="firstName"
        label="First Name"
        autoFocus
        value={firstName}
        onChange={e => { setFirstName(e.target.value) }}
      />
    </Grid>
  )

  const lastNameComponent = (
    <Grid item xs={12} sm={6}>
      <TextField
        required
        fullWidth
        id="lastName"
        label="Last Name"
        name="lastName"
        autoComplete="family-name"
        value={lastName}
        onChange={e => { setLastName(e.target.value) }}
      />
    </Grid>
  )

  const usernameComponent = (
    <Grid item xs={12}>
      <TextField
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        value={username}
        onChange={e => { setUsername(e.target.value) }}
      />
    </Grid>
  )

  const emailComponent = (
    <Grid item xs={12}>
      <EmailInput
        email={email}
        onEmailChange={setEmail}
      />
    </Grid>
  )

  const passwordComponent = (
    <Grid item xs={12}>
      <TextField
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="new-password"
        value={password}
        onChange={e => { setPassword(e.target.value) }}
      />
    </Grid>
  )

  const retypedPwdNotMatched = retypedPassword !== '' && password !== retypedPassword
  const retypedPwdComponent = (
    <Grid item xs={12}>
      <TextField
        error={retypedPwdNotMatched}
        helperText={retypedPwdNotMatched && 'Password does not match.'}
        required
        fullWidth
        name="retyped-password"
        label="Re-type Password"
        type="password"
        id="retyped-password"
        autoComplete="new-password"
        value={retypedPassword}
        onChange={e => { setRetypedPassword(e.target.value) }}
      />
    </Grid>
  )

  const mobilePhoneComponent = (
    <Grid item xs={12}>
      <MobilePhoneInput mobilevalue={mobile} onMobileValueChange={value => { setMobile(value) }} />
    </Grid>
  )

  const dobComponent = (
    <Grid item xs={12}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date of Birth"
          value={dateOfBirth}
          onChange={(newDate: Dayjs | Nullish) => {
            setDateOfBirth(newDate)
          }}
          inputFormat={DATE_FORMAT}
          renderInput={(params: any) => <TextField {...params} fullWidth/>}
        />
      </LocalizationProvider>
    </Grid>
  )

  const signupButton = (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Sign Up
    </Button>
  )

  const alreadyHaveAnAccount = (
    <Grid container justifyContent="center">
      <Grid item>
        <Link href="#" variant="body2">
          Already have an account? Sign in
        </Link>
      </Grid>
    </Grid>
  )

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmitClicked} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {errorAlert}
              {firstNameComponent}
              {lastNameComponent}
              {usernameComponent}
              {emailComponent}
              {passwordComponent}
              {retypedPwdComponent}
              {mobilePhoneComponent}
              {dobComponent}
            </Grid>
            {signupButton}
            {alreadyHaveAnAccount}
          </Box>
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
  )
}

export default SignupForm
