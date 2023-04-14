import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import "/Front/blogPessoalFront/blogPessoalFront/src/index.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
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
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Box>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Box>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Cadastrar Tema
                </Typography>
              </Box>
              <Link to='/login'>
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    Logout
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
