import { Link } from "react-router-dom";

const TesteInfo = ({ dados }) =>{

    return (
        <div className="teste-info-component">
            <div>
                Nome: {dados.nome}
            </div>
            <div>
                Idade: {dados.idade}
            </div>
            <div>
                Cidade: {dados.cidade}
            </div>
            <div>
                resultado: {dados.infectado === true ? 'positivo': 'falso'}
            </div>
            <Link to={'person/'+dados.id}><i className ="fas fa-user user-btn "></i></Link>
        </div>
    )
}
export default TesteInfo;

