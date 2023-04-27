import React, { useEffect } from "react"
import { Typography, Grid, Button } from "@material-ui/core"
import { Box } from "@mui/material"
import "./Home.css"
import TabPostagens from "../../componentes/postagens/tabPostagens/TabPostagens";
import { Link, useNavigate } from "react-router-dom";
import ModalPostagem from "../../componentes/postagens/modalPostagem/ModalPostagem";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/token/tokenReducer";
import { toast } from 'react-toastify'

function Home() {

  const history = useNavigate()

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  useEffect(() => {
    if (token == "") {
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
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{backgroundColor: '#C71585'}}
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="texto"
            >
              Alô?! É os anos 2000, ele quer o estilo dele de volta!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="texto"
            >
              Vamos falar sobre Divas Pop, Disney e Nepo Babys!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
              <Box marginRight={1}>
              <ModalPostagem/>
              </Box>
              <Link to='/postagens'>
              <Button
                variant="outlined"
                className="buttonHome"
              >
                Ver Postagens
              </Button>
              </Link>
              
            </Box>
            
        </Grid>
        <Grid item xs={6} className="fotoHome">
        </Grid>
        <Grid xs={12} style={{backgroundColor: '#fff3f4'}}>
        <TabPostagens />
        </Grid>
        
      </Grid>
    </>
  );
}

export default Home;
