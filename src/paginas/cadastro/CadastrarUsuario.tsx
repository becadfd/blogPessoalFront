import React, {useState, useEffect, ChangeEvent} from 'react'
import './CadastrarUsuario.css'
import { Button, Divider, Grid, TextField, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import Cadastro from '../../models/Cadastro'
import { cadastrarUsuario } from '../../service/Service'

function CadastrarUsuario() {

 const history = useNavigate()
 const [confirmarSenha, setConfirmarSenha] = useState<String>('')
 const [cadastro, setCadastro] = useState<Cadastro>(
     {
     id:0,
     nome: '',
     usuario: '',
     senha: '',
     foto:''
}
)

const [cadastroResult, setCadastroResult] = useState<Cadastro>(
  {
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto: ''
  })

useEffect(() => {
  if (cadastroResult.id != 0) {
      history('/login')
  }
}, [cadastroResult])


function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>){
  setConfirmarSenha(event.target.value)
}


function updatedModel(event: ChangeEvent<HTMLInputElement>) {

  setCadastro({
      ...cadastro,
      [event.target.name]: event.target.value
  })

}
async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
  event.preventDefault()
  if(confirmarSenha == cadastro.senha){
  cadastrarUsuario('/usuarios/cadastrar', cadastro, setCadastroResult)
  alert('Usuario cadastrado com sucesso')
  }else{
      alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
  }
}


  return (
    <>
        <Grid container alignItems='center' justifyContent='center' className='background'>
            <Grid item xs={6} className='imgCadastro'></Grid>
            <Grid item xs={6} alignItems='center'>
            <Box padding={10}>
                    <form onSubmit={onSubmit}>                        
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textoCadastro'>Cadastrar</Typography>
                        <TextField 
                        required
                        value={cadastro.nome}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                        variant='outlined' 
                        label='nome' 
                        name='nome'
                        margin='normal' 
                        fullWidth />
                        <TextField 
                        required
                        value={cadastro.usuario}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                        variant='outlined' 
                        label='usuario' 
                        name='usuario'
                        margin='normal'
                        fullWidth/>
                         <TextField 
                         required
                         value={cadastro.senha}
                         onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                        variant='outlined' 
                        label='senha' 
                        name='senha'
                        type='password'
                        margin='normal' 
                        fullWidth />
                        <TextField 
                        required
                        value={confirmarSenha}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)}
                        variant='outlined' 
                        label='confirmarSenha' 
                        name='confirmarSenha'
                        margin='normal'  
                        type='password' 
                        fullWidth/>
                        <Divider />
                        <Box marginTop={2} textAlign='center'>
                        <Link to ='/login'>
                        <Button variant='contained' className='buttonCancelar'>Cancelar</Button>
                        </Link>
                        <Button type='submit' variant='contained' className='buttonCadastrar'>Candastrar</Button>
                        </Box>
                    </form>
                    </Box>
            </Grid>

        </Grid>
    </>
  )
}

export default CadastrarUsuario