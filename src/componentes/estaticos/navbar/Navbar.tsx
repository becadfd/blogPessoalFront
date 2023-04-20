import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import "/Front/blogPessoalFront/blogPessoalFront/src/index.css";
import "./Navbar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

function Navbar() {

  const [token, setToken] = useLocalStorage('token')
  const history = useNavigate()

  function goLogout(){
    setToken('')
    alert('Usuário deslogado')
    history('/login')
  }

  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor: "var(--LighPink)",
          color: "var(--MediumVioletRed)",
        }}
      >
        <Toolbar variant="dense">
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
          <Box className="cursor">
              <Typography variant="h5" color="inherit">
                Blog Pessoal
              </Typography>
            </Box>
            
            <Box display="flex" justifyContent="start">
            <Link to='/home'>
            <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>
            </Link>
            <Link to='/postagens'>
            <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Box>
            </Link>
              <Link to='/temas'>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Box>
              </Link>
              <Link to='/cadastro-temas'>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Cadastrar Tema
                </Typography>
              </Box>
              </Link>
              
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit" onClick={goLogout}>
                    Logout
                  </Typography>
                </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
