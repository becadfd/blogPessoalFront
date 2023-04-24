import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Temas } from "../../../models/Temas";
import { getAll, getById, post, put } from "../../../service/Service";
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Postagem } from "../../../models/Postagem";

function CadastroPostagem() {

    const history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Temas[]>([])
    const [token, setToken] = useLocalStorage('token');

    const [tema, setTema] = useState<Temas> (
      {
        id: 0,
        descricao: ''
      }
    )

    const [postagem, setPostagem] = useState<Postagem> (
      {
        id: 0,
        titulo: '',
        texto: '',
        data: '',
        tema: null
      })

    useEffect(() => {
        if (token === '') {
            alert("Efetue o login")
            history("/login")

        }
    }, [token])

    useEffect(() => { 
      setPostagem({
          ...postagem,
          tema: tema
      })
  }, [tema])

  useEffect(() => {
    getTemas()
    if (id !== undefined) {
        getByIdPostagem(id)
    }
}, [id])

async function getTemas() {
    await getAll("/temas", setTemas, {
        headers: {
            Authorization: token
        }
    })
}

async function getByIdPostagem(id: string) {
    await getById(`postagens/${id}`, setPostagem, {
        headers: {
            Authorization: token
        }
    })
}

function updateModel(event: ChangeEvent<HTMLInputElement>) {

    setPostagem({
        ...postagem,
        [event.target.name]: event.target.value,
        tema: tema
    })

}

async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
  event.preventDefault();

  if(id !== undefined){
    try {
      await put('/postagens', postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      alert('Postagem atualizado com sucesso');
      history('/postagens')
    } catch (error) {
      alert('Falha ao atualizar postagem');
    }
  } else {
    try {
      await post('/postagens', postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      alert('Postagem cadastrado com sucesso');
      history('/postagens')
    } catch (error) {
      alert('Falha ao cadastrar postagem');
    }
  }
}

  return (
    <>
       <Grid container className='textoCP'>
        <Box maxWidth='sm'>
        <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Cadastrar Postagem</Typography>
                <TextField value={postagem.titulo} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={postagem.texto} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(event) => getById(`/temas/${event.target.value}`, setTema, {
                            headers: {
                                Authorization: token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Box>
            
        </Grid>
    </>
    )
}

export default CadastroPostagem

