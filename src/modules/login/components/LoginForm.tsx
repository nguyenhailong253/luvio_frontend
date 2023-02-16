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

import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { Link } from 'react-router-dom'
import Copyright from '../../../components/Copyright'
import EmailInput from '../../../components/EmailInput'
import type { LoginFormProps } from '../types'

const theme = createTheme()

const LoginForm: React.FunctionComponent<LoginFormProps> = (props) => {
  const { variables, onSubmitClicked, setEmail, setPassword } = props
  const { email, password, errorMsg } = variables

  const errorAlert = errorMsg !== '' && (
    <Grid item xs={12}>
      <Alert variant="outlined" severity="error" sx={{ mt: 2 }}>
        {errorMsg}
      </Alert>
    </Grid>
  )

  const emailComponent = (
    <Grid item xs={12}>
      <EmailInput
        email={email}
        onEmailChange={setEmail}
        autoFocus={true}
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
        autoComplete="current-password"
        value={password}
        onChange={e => { setPassword(e.target.value) }}
      />
    </Grid>
  )

  const rememberMe = ( // temporarily not used
    <Grid item xs={12}>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
    </Grid>
  )

  const loginButton = (
    <Grid item xs={12}>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mb: 2 }}
      >
      Log In
      </Button>
    </Grid>
  )

  const forgotPwd = ( // temporarily not used
    <Grid item xs>
      <Link to='/' className='forgotPwd'>
        Forgot password?
      </Link>
    </Grid>
  )

  const signup = (
    <Grid item>
      <Link to='/signup' className='signup-redirect'>
        {"Don't have an account? Sign Up"}
      </Link>
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
            Log in
          </Typography>
          <Box component="form" onSubmit={onSubmitClicked} noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              {errorAlert}
              {emailComponent}
              {passwordComponent}
              {/* {rememberMe} */}
              {loginButton}
            </Grid>
            <Grid container justifyContent={'center'}>
              {/* {forgotPwd} */}
              {signup}
            </Grid>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
  )
}

export default LoginForm
