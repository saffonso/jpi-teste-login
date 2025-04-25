import './InputText.css'

const InputText = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value)
    }

    return(
        <div className='inputText'>
            <input onChange={aoDigitar} value={props.valor} placeholder={props.nome} type={props.tipo || "text"} required={true} />
        </div>
    )
}

export default InputText