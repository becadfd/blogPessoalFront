import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import './ListaPostagem.css'
import React, { useEffect, useState } from 'react'
import { Postagens } from '../../../models/Postagens'
import useLocalStorage from 'react-use-localstorage'
import { Link, useNavigate } from 'react-router-dom'
import { getAll } from '../../../service/Service'

function ListaPostagem() {
  
  const [postagens, setPostagens] = useState<Postagens[]>([])
  const [token, setToken] = useLocalStorage('token')
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
      alert('Efetue o login')
      history('/login')
    }
  }, [])

  return (
    <>
    {postagens.map((postagem) => (
     <Box m={2}>
     <Card variant='outlined'
     sx={{ minWidth: 275 }}>
       <CardContent>
         <Typography
           sx={{ fontSize: 14 }}
           color="text.secondary"
           gutterBottom
         >
           Postagens
         </Typography>
         <Typography variant="h5" component="div">
           {postagem.titulo}
         </Typography>
         <Typography variant="body2" component="p">
          {postagem.texto}
         </Typography>
         <Typography variant="body2" component="p">
           {postagem.tema?.descricao}
         </Typography>
       </CardContent>
       <CardActions>
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
    ))}
   
    </>
  )
}

export default ListaPostagem