import { Button, Grid, Typography } from '@material-ui/core'
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