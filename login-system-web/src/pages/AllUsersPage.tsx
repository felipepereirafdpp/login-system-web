import { useEffect, useState } from "react"
import type { IuserParams } from "../interface/User/IUserParams"
import FuncoesUserTela from "../hooks/useUser"
import { Link } from "react-router-dom"


export default function AllUserPage() {
    const [Users, setUsers] = useState<IuserParams[]>([])

    async function buscarDados() {
        const dados = await FuncoesUserTela().CarregarListaUser()
        setUsers(dados)
        console.log(dados)
    }

    useEffect(() => { buscarDados() }, [])

    const numeroRegistro = Users.length
    

    return (
        <div>
            <button><Link to="/dashboard">Voltar</Link></button>
            <h1>bwysbwyb</h1>
            <h3>Usuarios Encontrados: {numeroRegistro} </h3>
            {Users.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}

        </div>
    )
}

