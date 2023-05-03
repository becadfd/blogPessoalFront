import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import './ListaPostagem.css'
import React, { useEffect, useState } from 'react'
import { Postagem } from '../../../models/Postagem'
import { Link, useNavigate } from 'react-router-dom'
import { getAll } from '../../../service/Service'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/token/tokenReducer'
import { toast } from 'react-toastify'
import { Grid } from '@material-ui/core'

function ListaPostagem() {
  
  const token = useSelector<TokenState, TokenState['token']>(
      (state) => state.token
  )

  const [postagens, setPostagens] = useState<Postagem[]>([])
  const history = useNavigate()

  async function getAllPostagens() {
    await getAll('/postagens', setPostagens, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(() => {
    getAllPostagens()
  }, [postagens.length])

  useEffect(() => {
    if(token === '') {
      toast.info('Efetue o Login', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      history('/login')
    }
  }, [token])

  return (
    <>
     {postagens.length === 0 && (<span className="loader"></span>)}
     <Grid container spacing={4} className='gridCard' >
    {postagens.map((postagem) => (
    <Grid item xs={12} sm={6} md={4} lg={3}>
     <Box m={2}>
     <Card variant='outlined'
     sx={{ minWidth: 275 }} className='cards'>
       <CardContent>
         <Typography
           sx={{ fontSize: 14 }}
           color="text.secondary"
           gutterBottom
         >
           Postagens
         </Typography>
         <Box className='tmCards'>
         <Typography variant="h5" component="div" className='postTitulo'>
           {postagem.titulo}
         </Typography>
         <Typography variant="body2" component="p" className='postTexto'>
          {postagem.texto}
         </Typography>
         </Box>
         <Typography variant="body2" component="p">
           {postagem.tema?.descricao}
         </Typography>
         <Typography variant="body2" component="p">
           Postado por: {postagem.usuario?.nome}
         </Typography>
         <Typography variant="body2" component="p">
         Data: {Intl.DateTimeFormat('pt-BR', {dateStyle: 'short'}).format(new Date(postagem.data))}
         </Typography>
        
       </CardContent>
       <CardActions style={{display: 'flex', justifyContent: 'center'}}>
         <Box display='flex' justifyContent='center' mb={1.5}>
          <Link to={`/editar-postagem/${postagem.id}`}>
          <Box mx={1}>
             <Button className='buttonPostagem' variant='contained' size="small">Editar</Button>
         </Box>
          </Link>
         <Link to={`/deletar-postagem/${postagem.id}`}>
          <Box mx={1}>
              <Button className='buttonPostagem' variant='contained' size="small">Deletar</Button>
          </Box>
         </Link>        
         </Box>
       </CardActions>
     </Card>
     </Box>   
     </Grid>
    ))} 
    </Grid>
    </>
  )
}

export default ListaPostagem