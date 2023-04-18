import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import './ListaTemas.css'
import React from "react";

function ListaTemas() {
  return (
    <>
      <Box>
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
              Disney
            </Typography>
          </CardContent>
          <CardActions>
            <Button className='buttonTema' variant='contained' size="small">Editar</Button>
            <Button className='buttonTema' variant='contained' size="small">Deletar</Button>
          </CardActions>
        </Card>
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
              Mean Girls
            </Typography>
          </CardContent>
          <CardActions>
            <Button className='buttonTema' variant='contained' size="small">Editar</Button>
            <Button className='buttonTema' variant='contained' size="small">Deletar</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default ListaTemas;
