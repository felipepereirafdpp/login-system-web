import { useState } from "react";
import { Link } from "react-router-dom";
import FuncoesUserTela from "../hooks/useUser";
import type { IUserEmailParams } from "../interface/User/IUserEmailParams";
import {type IuserParams } from "../interface/User/IUserParams";

export default function SearchEmail() {
    const [email , setEmail] = useState("")
    const [users , setUsers] = useState<IuserParams>()
    
    const { CarregarBuscaEmail } = FuncoesUserTela();

    async function EfetuarBusca(){
        const dados : IUserEmailParams = {
            email : email
        }

        const respota = CarregarBuscaEmail(dados)
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
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Registro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{users?.name}</td>
                            <td>{users?.email}</td>
                            <td>{users?.id}</td>
                        </tr>
                    </tbody>
                </table>
           </div>
        </div>
    )
}