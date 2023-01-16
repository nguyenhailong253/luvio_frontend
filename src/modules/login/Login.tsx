import Button from '@mui/material/Button'
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks'

import { submit, selectUsername } from './LoginSlice'

export default function Login (): any {
  // The `state` arg is correctly typed as `RootState` already
  const username = useAppSelector(selectUsername)
  const password = useAppSelector(state => state.login.password)
  const dispatch = useAppDispatch()

  // omit rendering logic
  //   console.log(username)

  return (
    <div>
      <Button variant="contained" onClick={() => dispatch(
        submit(
          { username: 'newuser', password: 'test' }
        )
      )}>
        Hello World {username}, {password}
        </Button>
    </div>
  )
}
