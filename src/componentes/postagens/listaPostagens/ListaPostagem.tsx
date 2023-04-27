import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import './ListaPostagem.css'
import React, { useEffect, useState } from 'react'
import { Postagem } from '../../../models/Postagem'
import { Link, useNavigate } from 'react-router-dom'
import { getAll } from '../../../service/Service'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/token/tokenReducer'
import { toast } from 'react-toastify'

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
         <Typography variant="h5" component="div" className='postTitulo'>
           {postagem.titulo}
         </Typography>
         <Typography variant="body2" component="p" className='postTexto'>
          {postagem.texto}
         </Typography>
         <Typography variant="body2" component="p">
           {postagem.tema?.descricao}
         </Typography>
         <Typography variant="body2" component="p">
           Postado por: {postagem.usuario?.nome}
         </Typography>
         <Typography variant="body2" component="p">
         Data: {Intl.DateTimeFormat('pt-BR', {dateStyle: 'full', timeStyle: 'medium'}).format(new Date(postagem.data))}
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