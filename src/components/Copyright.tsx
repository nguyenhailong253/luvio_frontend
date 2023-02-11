import Typography from '@mui/material/Typography'
import React from 'react'

const Copyright: React.FunctionComponent = (props: any) => (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      luvio.com.au
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
)

export default Copyright
