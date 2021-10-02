import { useEffect, useState } from "react";
import TesteInfo from './TesteInfo';

const Home = () =>{
    const [data, setData] = useState(null);
    const [filtro, setFiltro] = useState('São José');
    

    useEffect(() =>{
        fetch('http://localhost:8080/registros')
        .then((res) =>{
            return res.json()
        })
        .then((data) =>{
            setData(data)
        })
    },[])

    return (
        <div className="home-container">
            <div className="filtro-container"> Filtrar 
                <select value = {filtro} onChange = {(e)=> setFiltro(e.target.value)}>
                    <option value = "Florianópolis"> Florianópolis </option>
                    <option value = "Blumenau"> Blumenau </option>
                    <option value = "Joinville"> Joinville </option>
                    <option value = "São José"> São Jose </option>
                </select>
            </div>

            <div className="home-data-container">
                
                {data && data.filter(element => element.cidade === filtro).map((data) =>{
                    return <TesteInfo dados = {data} key = {data.id}/>
                })}
            </div>
     </div>
    )
}
export default Home;