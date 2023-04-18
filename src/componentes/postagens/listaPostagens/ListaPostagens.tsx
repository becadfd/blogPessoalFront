import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import './ListaPostagens.css'
import React from 'react'

function ListaPostagens() {
  return (
    <>
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
              Título
            </Typography>
            <Typography variant="body2" component="p">
              Texto da Postagem
            </Typography>
            <Typography variant="body2" component="p">
              Tema
            </Typography>
          </CardContent>
          <CardActions>
            <Box display='flex' justifyContent='center' mb={1.5}>
            <Box mx={1}>
                <Button className='buttonPostagem' variant='contained' size="small">Editar</Button>
            </Box>
            <Box mx={1}>
                <Button className='buttonPostagem' variant='contained' size="small">Deletar</Button>
            </Box>
            </Box>
          </CardActions>
        </Card>
        </Box> 
    </>
  )
}

export default ListaPostagens