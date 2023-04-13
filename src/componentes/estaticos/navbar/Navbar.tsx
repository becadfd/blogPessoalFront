import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import "/Front/blogPessoalFront/blogPessoalFront/src/index.css"
import "./Navbar.css"

function Navbar() {
  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "var(--color-LighPink)", color: "var(--color-MediumVioletRed)" }}
      >
        <Toolbar variant="dense">
        <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
            <Box style={{ cursor: "pointer" }}>
              <Typography variant="h5" color="inherit">
                Blog Pessoal
              </Typography>
            </Box>
            <Box display="flex" justifyContent="start">
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  Cadastrar Tema
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
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
