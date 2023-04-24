import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { Postagens } from '../../../models/Postagens';
import { deleteId, getById } from '../../../service/Service';

function DeletarPostagem() {

  const [token, setToken] = useLocalStorage('token');
  const history = useNavigate();
  const [postagem, setPostagem] = useState<Postagens>()
  const { id } = useParams<{id: string }>();

  useEffect(() => {
    if (token === "") {
      alert("Efetue o login");
      history("/login");
    }
  }, [token]);

  async function getPostagemById(id: string) {
    getById(`/postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(() =>{
    if(id !== undefined) {
        getPostagemById(id)}
  }, [id])

    function deletarPostagem(){
      history('/postagens')
        deleteId(`/postagens/${id}`, {
          headers: {
            Authorization: token
          }
        })
        alert('Postagem deletada com sucesso')
    }

  function nao() {
    history('/postagens')
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem: {postagem?.titulo}
              </Typography>
              <Typography color="textSecondary" >
              Tema
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={deletarPostagem} variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button onClick={nao}  variant="contained" size='large' color="secondary">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  )
}

export default DeletarPostagem