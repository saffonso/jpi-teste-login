import { useState } from 'react';
import Button from '../button';
import InputText from '../InputText';
import Logo from '../logo';
import './Form.css'
import { Navigate, Route } from 'react-router';

const FormLogin = () => {

    const [user,setUser] = useState('Santiago')
    const [password,setPassword] = useState('0234')
    const [logado,setLogado] = useState('')
    const users = []

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('clicado');
        setLogado(true);
    };

    if (logado) {
        return <Navigate to='/home' replace />;
    }
    return(
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <Logo/>
                <h2>Olá! Seja bem-vindo</h2>
                <p>Faça login para continuar:</p>
                <InputText valor={user} aoAlterar={user => setUser(user)} nome="Usuário"/>
                <InputText valor={password} aoAlterar={password => setPassword(password)} nome="Senha" tipo="password" />
                <Button>Entrar</Button>
            </form>
        </section>        
    )
}

export default FormLogin;