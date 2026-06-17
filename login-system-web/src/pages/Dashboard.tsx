import { Link } from "react-router-dom";


export default function Dashboard(){


    return(
        <div>   
            <h1>Seja Bem Vindo {}</h1>
            <ul>
                <li><Link to="/user-all">Gerencie os Usuarios</Link></li>
                <li><Link to="/searchEmail">Teste</Link></li>
                
            </ul>
        </div>
    )
} 