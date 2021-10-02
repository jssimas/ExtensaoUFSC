import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
const Person = () =>{
    const history = useHistory();
    const { id } = useParams()
    const [data, setData] = useState();

    function handleDelete(){
        fetch(`http://localhost:8080/registros/${id}`, 
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then( (a) =>{
            console.log('deletado');
            history.push('/');
      
        })
    }
    useEffect(() =>{
        fetch(`http://localhost:8080/registros/${id}`)
        .then( (resp) =>{
            return resp.json()
        })
        .then((data) =>{
            setData(data)
            console.log(data);
        })
    })

    return (
        <div>
            {data && <div className="person-data">
                <div className="person-info">
                   Nome: {data.nome}
                </div>
                <div className="person-info">
                   Cidade: {data.cidade}
                </div>
                <div className="person-info">
                   Idade: {data.idade}
                </div>  
                <div className="person-info">
                    Infectado: {data.infectado === true? 'positivo': 'falso'}
                </div>
                <div className="delete-btn" onClick = {handleDelete}>
                    <i class="fas fa-user-times"></i>
                </div>
             </div>}
        </div>
    );
}
export default Person;