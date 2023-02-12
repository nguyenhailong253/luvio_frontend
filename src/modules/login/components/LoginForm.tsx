import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
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
import React from 'react'
import Copyright from '../../../components/Copyright'
import type { LoginFormProps } from '../types'

const theme = createTheme()

const LoginForm: React.FunctionComponent<LoginFormProps> = (props) => {
  const { variables, onSubmitClicked, setEmail, setPassword } = props
  const { email, password } = variables

  const emailComponent = (
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
      value={email}
      onChange={e => { setEmail(e.target.value) }}
    />
  )

  const passwordComponent = (
    <TextField
      margin="normal"
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
  )

  const rememberMe = (
    <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
    />
  )

  const loginButton = (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
              Log In
    </Button>
  )

  const forgotPwd = (
    <Grid item xs>
      <Link href="#" variant="body2">
                  Forgot password?
      </Link>
    </Grid>
  )

  const signup = (
    <Grid item>
      <Link href="#" variant="body2">
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
            {emailComponent}
            {passwordComponent}
            {rememberMe}
            {loginButton}
            <Grid container>
              {forgotPwd}
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
