import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import './ListaTemas.css'
import React, { useEffect, useState } from "react";
import { Temas } from "../../../models/Temas";
import useLocalStorage from "react-use-localstorage";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../../service/Service";

function ListaTemas() {

  const [temas, setTemas] = useState<Temas[]>([])
  const [token, setToken] = useLocalStorage('token')
  const history = useNavigate()

  async function getAllTemas() {
    await getAll('/temas', setTemas, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(() => {
    getAllTemas()
  }, [])

  useEffect(() => {
    if(token === '') {
      alert('Efetue o login')
      history('/login')
    }
  }, [])


  return (
    <>
     {temas.map((tema) => (
<Box m={4}> 
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Tema:
            </Typography>
            <Typography variant="h5" component="div">
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Button className='buttonTema' variant='contained' size="small">Editar</Button>
            <Button className='buttonTema' variant='contained' size="small">Deletar</Button>
          </CardActions>
        </Card>
      </Box>
      ))}
    </>
  );
}

export default ListaTemas;
