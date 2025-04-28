import { useState } from "react";
import Button from "../button";
import InputText from "../InputText";
import Logo from "../logo";
import './FormEsqueceuSenha.css';

const FormEsqueceuSenha = () => {

    const [email,setEmail] = useState('');

    const aoEnviar = (evento) => {
        evento.preventDefault();
        console.log(email);
    }




    return(
        <section className="section">
            <form onSubmit={aoEnviar}>
                <Logo/>
                <h2>Teu email:</h2>
                <p>Um link vai ser enviado para o teu email</p>
                <InputText valor={email} aoAlterar={valor => setEmail(valor)} nome='Email' tipo='email'/>
                <Button>Enviar</Button>
            </form>
        </section>
    )
}

export default FormEsqueceuSenha;