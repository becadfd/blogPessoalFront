import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Typography, Grid } from '@material-ui/core'
import { Box } from '@mui/material'
import './Footer.css'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/token/tokenReducer'


function Footer() {

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
)
    var footerComponent;
    
    if(token !== '') {
      footerComponent = 
      <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Box display={'flex'} alignItems="center" width={'100%'} justifyContent={'space-around'} className='box'>
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
              className='textoFooter'
            >
              Faça parte das minhas comunidades nesse orkut que é a internet{' '}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <a
              href="https://github.com/becadfd"
              target="_blank"
            >
              <GitHubIcon className='iconGit'/>
            </a>
            <a
              href="https://www.linkedin.com/in/rebeca-de-freitas-damas-173305269/"
              target="_blank"
            >
              <LinkedInIcon className='iconLinked' />
            </a>
          </Box>
        </Box>
        <Box >
          <Box paddingTop={1}
          display='flex'
          flexDirection='column'
          alignItems='center'>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              className='textoFooter'
              component={'span'}
            >
              © 2023 Copyright: Rebeca Damas {' '}
            </Typography>
            <img src="/src/assets/img/1.png" alt="" className='logo'/>
          
          </Box>
        </Box>
      </Box>
    </Grid>        
    }

  return (
    <>
       {footerComponent}
    </>
  )
}

export default Footer