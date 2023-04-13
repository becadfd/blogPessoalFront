import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Typography, Grid } from '@material-ui/core'
import { Box } from '@mui/material'


function Footer() {
  return (
    <>
         <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box display={'flex'} alignItems="center" style={{ backgroundColor: 'var(--color-LighPink)', height: '100px' }} width={'100%'} justifyContent={'space-around'}>
          <Box >
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                style={{ color: 'var(--color-MediumVioletRed)', fontSize: 17 }}
              >
                Faça parte das minhas comunidades nesse orkut que é a internet{' '}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a
                href="https://github.com/becadfd"
                target="_blank"
              >
                <GitHubIcon style={{ fontSize: 40, color: 'var(--color-MediumVioletRed)' }} />
              </a>
              <a
                href="https://www.linkedin.com/in/rebeca-de-freitas-damas-173305269/"
                target="_blank"
              >
                <LinkedInIcon style={{ fontSize: 45, color: 'var(--color-MediumVioletRed)' }} />
              </a>
            </Box>
          </Box>
          <Box >
            <Box paddingTop={1}>
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                style={{ color: 'var(--color-MediumVioletRed)', fontSize: 17 }}
                component={'span'}
              >
                © 2023 Copyright: Rebeca Damas {' '}
              </Typography>
            
            </Box>
          </Box>
        </Box>
      </Grid>        
    </>
  )
}

export default Footer