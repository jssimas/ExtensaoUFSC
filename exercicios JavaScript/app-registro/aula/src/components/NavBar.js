import { Link } from 'react-router-dom';
const NavBar = () =>{
    return (
        <div className="navbar-container">
            <div className="navbar-title">
                Postinho App 
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cadastro"> Cadastro</Link></li>
            </ul>
        </div>
    )
}
export default NavBar;
