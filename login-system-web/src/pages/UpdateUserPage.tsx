import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import type { IuserParams } from "../interface/User/IUserParams";
import FuncoesUserTela from "../hooks/useUser";

export default function UpdateUserPage() {
    const [users, setUsers] = useState<IuserParams>()
    const [parametros] = useSearchParams();
    const id = parametros.get("id");

    const { CarregarIDUser } = FuncoesUserTela()
    async function BuscarPorID() {
        if (id) {
            const dados = await CarregarIDUser({ id: id })
            if (dados) {
                setUsers(dados)
            }
        }
    }
    useEffect(()=>{ BuscarPorID(); },[])

    return (
        <div>
            <button><Link to="/user-all">Voltar</Link></button>
            <input type="text" value={users?.name}/>
            <input type="text" value={users?.email}/>
        </div>
    )
}