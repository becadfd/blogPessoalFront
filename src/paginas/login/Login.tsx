import React, { ChangeEvent, useState, useEffect } from "react";
import "./Login.css";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../service/Service";
import UsuarioLogin from "../../models/UsuarioLogin";
import { useDispatch } from "react-redux";
import { addId, addToken } from "../../store/token/action";
import { toast } from 'react-toastify'

function Login() {
  //aqui vem a lógica
  const history = useNavigate();
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  const[respUserLogin, setRespUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  })

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    if (token !== "") {
      dispatch(addToken(token));
      history("/home");
    }
  }, [token]);

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await login("/usuarios/logar", userLogin, setRespUserLogin);
      toast.success('Usuário logado com sucesso', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } catch (error) {
      toast.error('Usuário ou senha inválidos', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }

  useEffect(()=> {
    if(respUserLogin.token !== '') {
      dispatch(addToken(respUserLogin.token))
      dispatch(addId(respUserLogin.id.toString()))
      history('/home')
    }
  }, [respUserLogin])

  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className="backgroundLogin"
      >
        <Grid xs={6} alignItems="center" className="formularioLogin">
          <Box paddingX={20}>
            <form onSubmit={onSubmit} style={{minWidth:"55vh"}}>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className="textoLogin"
              >
                Entrar
              </Typography>
              <TextField
                required
                variant="outlined"
                label="Usuário"
                name="usuario"
                value={userLogin.usuario}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
                margin="normal"
                fullWidth
              />
              <TextField
                type="password"
                name="senha"
                error={userLogin.senha.length < 8 && userLogin.senha.length > 0}
                helperText={
                  userLogin.senha.length < 8 && userLogin.senha.length > 0
                    ? "Senha com caracteres insuficientes"
                    : ""
                }
                value={userLogin.senha}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
                variant="outlined"
                label="Senha"
                margin="normal"
                fullWidth
              />
              <Divider />
              <Box marginTop={2} textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  className="buttonLogar"
                >
                  Logar
                </Button>
              </Box>
            </form>
            <Box display="flex" justifyContent="center" marginTop={2} className="textoC">
              <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Ainda não tem uma conta?
                </Typography>
              </Box>
              <Link to="/cadastro">
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  align="center"
                  className="textoCadastrar"
                >
                  Cadastre-se
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} className="imgLogin"></Grid>
      </Grid>
    </>
  );
}

export default Login;
