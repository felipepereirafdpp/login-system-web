import { useState } from "react";
import { Link } from "react-router-dom";
import FuncoesUserTela from "../hooks/useUser";
import type { IUserEmailParams } from "../interface/User/IUserEmailParams";
import { IuserParams } from "../interface/User/IUserParams";

export default function SearchEmail() {
    const [email , setEmail] = useState("")
    const [users , setUsers] = useState<IuserParams>()
    
    async function EfetuarBusca(){
        const dados : IUserEmailParams = {
            email
        }

        const respota = FuncoesUserTela().CarregarBuscaEmail(dados)
        const Usuarios = await respota
        setUsers(Usuarios)
        console.log(respota)
    }


    return (
        <div>
            <button><Link to="/dashboard">Voltar</Link></button>
            <input type="text" placeholder="Insira o email" onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={EfetuarBusca}>Buscar</button>

           <div>
                <p>{users?.name}</p>
           </div>
        </div>
    )
}