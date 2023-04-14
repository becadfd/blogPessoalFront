import React from 'react'
import "./Login.css"
import { Grid, Typography, TextField, Button, Divider } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
        <Grid container alignItems='center' justifyContent='center' className='background'>
            <Grid xs={6} alignItems='center'>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textoLogin'>Entrar</Typography>
                        <TextField id='usuario' variant='outlined' label='Usuário' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' variant='outlined' label='Senha' name='senha' margin='normal'  type='password' fullWidth/>
                        <Divider />
                        <Box marginTop={2} textAlign='center'>
                            <Link to ='/home'>
                        <Button type='submit' variant='contained' className='buttonLogar'>Logar</Button>
                        </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1'gutterBottom align='center'>Ainda não tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1'gutterBottom align='center' className='textoLogin'>Cadastre-se</Typography>
                    </Box>
                </Box>
                </Grid>
            <Grid xs={6} className='imgLogin'></Grid>

        </Grid>
    </>
  )
}

export default Login