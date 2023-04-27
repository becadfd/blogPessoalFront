import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Temas } from '../../../models/Temas';
import { deleteId, getById } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/tokenReducer';
import { toast } from 'react-toastify'

function DeletarTema() {

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
)
  const history = useNavigate();
  const [tema, setTema] = useState<Temas>()
  const { id } = useParams<{id: string }>();

  useEffect(() => {
    if (token === "") {
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
      history("/login");
    }
  }, [token]);

  async function getTemaById(id: string) {
    getById(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(() =>{
    if(id !== undefined) {
        getTemaById(id)}
  }, [id])

    function deletarTema(){
        deleteId(`/temas/${id}`, {
          headers: {
            Authorization: token
          }
        })
        history('/temas')
        toast.success('Tema deletado com sucesso', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
    }

  function nao() {
    history('/temas')
  }

  return (
    <>
    <Box m={2}>
      <Card variant="outlined" >
        <CardContent>
          <Box justifyContent="center">
            <Typography color="textSecondary" gutterBottom>
              Deseja deletar o Tema: {tema?.descricao}
            </Typography>
            <Typography color="textSecondary" >
            Tema
            </Typography>
          </Box>

        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
            <Box mx={2}>
            <Button onClick={deletarTema} variant="contained" className="marginLeft" size='large' color="primary">
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

export default DeletarTema