import React from "react";
import Home from "./paginas/home/Home";
import Footer from "./componentes/estaticos/footer/Footer";
import "./App.css";
import Login from "./paginas/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastrarUsuario from "./paginas/cadastro/CadastrarUsuario";
import ListaTemas from "./componentes/temas/listaTemas/ListaTemas";
import ListaPostagens from "./componentes/postagens/listaPostagens/ListaPostagem";
import CadastroTemas from "./componentes/temas/cadastroTemas/CadastroTemas";
import CadastroPostagem from "./componentes/postagens/cadastroPostagem/CadastroPostagem";
import DeletarTema from "./componentes/temas/deletarTema/DeletarTema";
import DeletarPostagem from "./componentes/postagens/deletarPostagem/DeletarPostagem";
import Navbar from "./componentes/estaticos/navbar/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
import Perfil from "./componentes/perfil/Perfil";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Provider store={store}>
      <ToastContainer/>
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
            <Route path="/cadastro-temas" element={<CadastroTemas/>}/>
            <Route path='/editar-tema/:id' element={<CadastroTemas />} />
            <Route path="/cadastro-postagem" element={<CadastroPostagem/>}/>
            <Route path="/editar-postagem/:id" element={<CadastroPostagem/>}/>
            <Route path='/deletar-tema/:id' element={<DeletarTema/>}/>
            <Route path="/deletar-postagem/:id" element={<DeletarPostagem/>}/>
            <Route path='/usuarios/:id' element={<Perfil/>}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
