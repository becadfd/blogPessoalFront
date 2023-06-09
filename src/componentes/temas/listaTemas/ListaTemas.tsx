import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import "./ListaTemas.css";
import React, { useEffect, useState } from "react";
import { Temas } from "../../../models/Temas";
import { Link, useNavigate } from "react-router-dom";
import { getAll } from "../../../service/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/token/tokenReducer";
import {toast} from 'react-toastify'

function ListaTemas() {
  const [temas, setTemas] = useState<Temas[]>([]);
  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
)

  const history = useNavigate();

  async function getAllTemas() {
    await getAll("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getAllTemas();
  }, [temas.length]);

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

  return (
    <>

    {temas.length === 0 && (<span className="loader"></span>)}
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
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link to={`/editar-tema/${tema.id}`}>
                  <Box mx={1}>
                    <Button
                      className="buttonTema"
                      variant="contained"
                      size="small"
                    >
                      Editar
                    </Button>
                  </Box>
                </Link>
                <Link to={`/deletar-tema/${tema.id}`}>
                  <Box mx={1}>
                    <Button
                      className="buttonTema"
                      variant="contained"
                      size="small"
                    >
                      Deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaTemas;
