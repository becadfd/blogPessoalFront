import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Temas } from "../../../models/Temas";
import { getById, post, put } from "../../../service/Service";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/token/tokenReducer";
import './CadastroTemas.css'
import { toast } from 'react-toastify'

function CadastroTemas() {
  const history = useNavigate();
  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
)
  const { id } = useParams<{ id: string }>();

  const [tema, setTema] = useState<Temas>({
    id: 0,
    descricao: "",
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {

    setTema({
        ...tema,
        [event.target.name]: event.target.value,
    })

}

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


  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if(id !== undefined){
      try {
        await put('/temas', tema, setTema, {
          headers: {
            Authorization: token,
          },
        });
        toast.success('Tema atualizado com sucesso', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        history('/temas')
      } catch (error) {
        toast.error('Falha ao atualizar tema', {
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
    } else {
      try {
        await post('/temas', tema, setTema, {
          headers: {
            Authorization: token,
          },
        });
        toast.success('Tema cadastrado com sucesso', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        history('/temas')
      } catch (error) {
        toast.error('Falha ao cadastrar tema', {
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
    }
  }

  return (
    <>
      <Grid container justifyContent='center'>
        <Grid item xs={4} className="formTema">
          <Typography
          className='textoCadastro'
          variant='h3'
          gutterBottom
          >
            {tema.id !== 0 ? 'Editar tema' : 'Cadastrar tema'}
          </Typography>
          <form onSubmit={onSubmit}>
            <Box display='flex' flexDirection='column' gap={2}>
              <TextField 
              label='Descrição do Tema'
              name='descricao'
              value={tema.descricao}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              } 
              />
              <Button
              type='submit'
              variant='contained'
              className="buttonTema"
              disabled={tema.descricao.length < 3}>
                Finalizar
              </Button>
            </Box>
          </form>
        </Grid>
        <Grid>
          <img src="https://i.imgur.com/y6ZqAMh.png" alt="" className="imgCT"/>
        </Grid>
      </Grid>
    </>

  );
}

export default CadastroTemas;
