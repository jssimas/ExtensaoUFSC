import { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () =>{
    const [nome , setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [cidade, setCidade] = useState('')
    const [infectado, setInfectado] = useState(false);
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();
        const data = {
            nome,
            idade,
            cidade,
            infectado,
            
        }
        fetch('http://localhost:8080/registros', {
            method: 'POST',
            headers: {"Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(() =>{
            console.log('adicionado ao registro')
            alert('adicionado')
            setTimeout(() =>{
                history.push('/')
            },1500)
        })
        .catch(err =>{
            console.log(err)
        })

        // methods 
        // GET --> puxo as informações
        // POST --> enviar as informações
        // DELETE --> deleto as informações
    }

    return (
        <div className="form-container">
            <form className="data-container" onSubmit = {handleSubmit}>
                <label htmlFor="name"> Nome </label>
                <input type="text" required value={nome} onChange = {(e) => setNome(e.target.value)}></input>
                <label htmlFor="idade"> Idade </label>
                <input type="number" required value={idade}  onChange = {(e) => setIdade(e.target.value)}></input>
                <label htmlFor="cidade"> Cidade</label>

                <select name="cidade" className="cidade" value = {cidade}  onChange = {(e) => setCidade(e.target.value)}>
                    <option value="Florianópolis">Florianópolis</option>
                    <option value="Blumenau">Blumenau</option>
                    <option value="Joinville">Joinville</option>
                    <option value="São José">São José</option>
                </select>

                <label htmlFor="infectado"> Infectado </label>
                <input type="checkbox" onChange = {(e) => setInfectado(e.target.checked)}/>
                <button > Enviar </button>
            </form>

        </div>
        
    )
}
export default Form;
