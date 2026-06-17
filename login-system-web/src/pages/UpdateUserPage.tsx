import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FuncoesUserTela from "../hooks/useUser";
import type { IuserParams } from "../interface/User/IUserParams";


export default function UpdateUserPage() {
    const [users, setUsers] = useState<IuserParams>()
    const { id } = useParams();


    const { CarregarUpdate } = FuncoesUserTela()
    const { CarregarIDUser } = FuncoesUserTela()

    async function BuscarPorID() {
        if (id) {
            const dados = await CarregarIDUser({ id: id })
            if (dados) {
                setUsers(dados)
            }
        }
    }

    async function AtualizarUser() {
        if(!users){
            return;
        }
        const dados = await CarregarUpdate(users)
        setUsers(dados)
    }

    useEffect(() => { BuscarPorID(); }, [])

    return (
        <div>
            <button><Link to="/user-all">Voltar</Link></button>
            <input type="text" value={users?.name ?? ""} onChange={(e) => setUsers({...users!,name: e.target.value})}/>
            <input type="text" value={users?.email ?? ""} onChange={(e) => setUsers({...users!,email: e.target.value})} />
            <button onClick={AtualizarUser}>Atualizar</button>
        </div>
    )
}