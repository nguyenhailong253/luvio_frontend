import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useSelector } from 'react-redux'
import Copyright from '../../components/Copyright'
import { getIsLoggedIn } from '../user/selectors'

const fakeFooters = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations']
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one'
    ]
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource']
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use']
  }
]

const Footer: React.FunctionComponent = () => {
//   const isLoggedIn = useSelector(getIsLoggedIn)
  const isLoggedIn = true // temporary for development

  const footer = isLoggedIn && (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6]
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly" sx={{ mb: 5 }}>
        {fakeFooters.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link href="#" variant="subtitle1" color="text.secondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Copyright />
    </Container>
  )

  return <>{footer}</>
}

export default Footer
