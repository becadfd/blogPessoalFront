import { AppBar, Tabs, Tab, Typography, Grid } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import React, { useState } from "react";
import ListaPostagens from "../listaPostagens/ListaPostagem";
import { Box } from "@mui/material";
import './TabPostagens.css'

function TabPostagens() {

    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" style={{backgroundColor: 'var(--MediumVioletRed)'}}>
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab className="buttonTabP" label="Todas as postagens" value="1"/>
            <Tab className="buttonTabP" label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagens />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Grid>
            <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Somos um blog que discute a cultura, moda e música dos anos 2000. Pensando no BOOM que o estilo "Y2K" teve nos últimos tempos, criamos um lugar onde podemos ser nostalgicos a vontade. Para todos os 90's e 00's babys! 
            <br />
            Seja muito bem vinde e cheque os temas e as postagens dos outros usuários, pode te dar uma ideia sobre os assuntos que tratamos aqui.
            <br />
            Tenha respeito sempre.
            </Typography>
          </Grid>
        </TabPanel>
      </TabContext>
    </>
  );
}

export default TabPostagens;
