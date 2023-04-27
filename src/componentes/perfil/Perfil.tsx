import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getById } from '../../service/Service';
import { TokenState } from '../../store/token/tokenReducer';
import { Usuario } from '../../models/Usuario';
import { Avatar, Container, Grid, Typography } from '@material-ui/core';
import './Perfil.css'

function Perfil() {

    const userId = useSelector<TokenState, TokenState['id']>(
            (state) => state.id
    )

    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
    )

    const [usuario, setUsuario] = useState<Usuario> ({
        id: +userId,
        nome: '', 
        usuario: '',
        foto: '',
        senha: '',
    })
    
    async function getUserById(id: number) {
        await getById(`/usuarios/${id}`, setUsuario, {
        headers: {
            Authorization: token
        }
        })
    }

    useEffect(() => {
        getUserById(+userId)
        }, [])
        

  return (
   <>
    <Container>
        <Grid container style={{marginTop: 100}}>
            <Grid xs={3} alignItems='center' justifyContent='center'>
                <Avatar src={usuario.foto} alt='' className='avatarPerfil' />
                    <Typography variant='h5' align='center'>
                        {usuario.nome}
                    </Typography>
            </Grid>
            <Grid xs={6} justifyContent='center'>
                <Typography variant='h4' className='tituloPost'>
                    Postagens de {usuario.nome}                    
                </Typography>
                <Typography>
                    Você tem um total de {usuario.postagem?.length} postagens feitas

                    {usuario.postagem?.map((post) =>(
                    <p>{post.titulo}</p>
                    ))}
                    </Typography>
            </Grid>
                <Grid xs={3}>
                    <img src="/src/assets/img/coração.png" alt="" style={{width: '90%'}}/>
                </Grid>
            </Grid>
    </Container>
   </>
  )
}

export default Perfil