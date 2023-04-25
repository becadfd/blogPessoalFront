import { Button, Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { Temas } from '../../../models/Temas';
import { deleteId, getById } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/tokenReducer';

function DeletarTema() {

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
)
  const history = useNavigate();
  const [tema, setTema] = useState<Temas>()
  const { id } = useParams<{id: string }>();

  useEffect(() => {
    if (token === "") {
      alert("Efetue o login");
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
        alert('Tema deletado com sucesso')
    }

  function nao() {
    history('/temas')
  }

  return (
    <>
      <Grid container justifyContent='center'>
        <Grid item xs={4}>
          <Typography>
            Deletar Tema
          </Typography>
          <Typography>
            Você tem certeza que deseja deletar o tema: {tema?.descricao}
          </Typography>

          <Button onClick={deletarTema} variant="contained" className="marginLeft" size='large' color="primary">
            Sim
          </Button>
          <Button onClick={nao} variant="contained" size='large' color="secondary">
            Não
          </Button>
        </Grid>
      </Grid></>
  
  )
}

export default DeletarTema