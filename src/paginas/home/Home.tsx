import React from "react"
import { Typography, Grid, Button } from "@material-ui/core"
import { Box } from "@mui/material"
import "./Home.css"
import "/Front/blogPessoalFront/blogPessoalFront/src/index.css"

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "var(--color-Crimson)" }}
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Alô?! É os anos 2000, ele quer o estilo dele de volta!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Vamos falar sobre Divas Pop, Disney e Nepo Babys!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button
              variant="outlined"
              style={{
                borderColor: "white",
                backgroundColor: "var(--color-MediumVioletRed)",
                color: "white",
              }}
            >
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://i.pinimg.com/564x/15/6c/02/156c020f3869a057154aa536a9f80f8d.jpg"
            alt=""
            className="fotoHome"
            />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}></Grid>
      </Grid>
    </>
  );
}

export default Home;
