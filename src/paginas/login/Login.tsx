import React, { ChangeEvent, useState, useEffect } from 'react'
import "./Login.css"
import { Grid, Typography, TextField, Button, Divider } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../service/Service';
import UsuarioLogin from '../../models/UsuarioLogin';

function Login() {

    //aqui vem a lógica
    const history = useNavigate()
    const [token, setToken] = useLocalStorage('token')
    const [userLogin, setUserLogin] = useState <UsuarioLogin>(
        {
        id:0,
        nome: '',
        usuario: '',
        senha: '',
        foto:'',
        token: ''
}
)

function updateModel(event: ChangeEvent<HTMLInputElement>){
    setUserLogin({
        ...userLogin,
        [event.target.name]: event.target.value
    })
}

useEffect(() => {
    if(token != ''){
        history('/home')
    }
}, [token])

async function onSubmit(event: ChangeEvent<HTMLFormElement>) {event.preventDefault()
    try{
       await login ('/usuarios/logar', userLogin, setToken)
        alert('Usuário logado com sucesso!')
    }catch (error){
        alert('Usuário ou senha são inválidos!')
    }
   
    }

    
  return (
    <>
        <Grid container alignItems='center' justifyContent='center' className='background'>
            <Grid xs={6} alignItems='center'>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>                        
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textoLogin'>Entrar</Typography>
                        <TextField 
                        required
                        variant='outlined' 
                        label='Usuário' 
                        name='usuario' 
                        value={userLogin.usuario}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                        margin='normal' 
                        fullWidth />
                        <TextField 
                        required
                        variant='outlined' 
                        label='Senha' 
                        name='senha'
                        value={userLogin.senha} 
                        onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                        margin='normal'  
                        type='password' 
                        fullWidth/>
                        <Divider />
                        <Box marginTop={2} textAlign='center'>
                            
                        <Button type='submit' variant='contained' className='buttonLogar'>Logar</Button>
                       
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1'gutterBottom align='center'>Ainda não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro'>
                        <Typography variant='subtitle1'gutterBottom align='center' className='textoLogin'>Cadastre-se</Typography>
                        </Link>
                        
                    </Box>
                </Box>
                </Grid>
            <Grid xs={6} className='imgLogin'></Grid>

        </Grid>
    </>
  )
}

export default Login