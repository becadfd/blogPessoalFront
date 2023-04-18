import React from "react";
import Home from "./paginas/home/Home";
import Navbar from "./componentes/estaticos/navbar/Navbar";
import Footer from "./componentes/estaticos/footer/Footer";
import "./App.css";
import Login from "./paginas/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastrarUsuario from "./paginas/cadastro/CadastrarUsuario";
import ListaTemas from "./componentes/temas/listaTemas/ListaTemas";
import ListaPostagens from "./componentes/postagens/listaPostagens/ListaPostagens";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{minHeight: '100vh'}}>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/cadastro" element={<CadastrarUsuario />}/>
            <Route path="/temas" element={<ListaTemas/>}/>
            <Route path="/postagens" element={<ListaPostagens/>}/>
            
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
