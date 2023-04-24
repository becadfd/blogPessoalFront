import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Temas } from "../../../models/Temas";
import { getById, post, put } from "../../../service/Service";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";

function CadastroTemas() {
  const history = useNavigate();
  const [token, setToken] = useLocalStorage("token");

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
    alert("Efetue o login");
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
        alert('Tema atualizado com sucesso');
        history('/temas')
      } catch (error) {
        alert('Falha ao atualizar tema');
      }
    } else {
      try {
        await post('/temas', tema, setTema, {
          headers: {
            Authorization: token,
          },
        });
        alert('Tema cadastrado com sucesso');
        history('/temas')
      } catch (error) {
        alert('Falha ao cadastrar tema');
      }
    }
  }

  return (
    <>
      <Grid container justifyContent='center'>
        <Grid item xs={4}>
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
              disabled={tema.descricao.length < 3}>
                Finalizar
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>

  );
}

export default CadastroTemas;
