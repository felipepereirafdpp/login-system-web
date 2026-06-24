import { useEffect, useState } from "react"
import type { IuserParams } from "../../interface/User/IUserParams"
import FuncoesUserTela from "../../hooks/useUser"
import './AllUser.css'
import "../../components/input.css"
import "../../components/botao.css"
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
        <div className="containerPrincipalGet">
            <header className="HeaderGet">
                <div className="campoInformacoesGet">
                    <div className="campoLogoGet">
                        <p>A</p>
                    </div>
                    <div className="cardGetTitle">
                        <h2>Login System</h2>
                    </div>
                </div>
                <div className="campBotaoGet">
                    <button className="campoBotaoBackElement"><Link to="/dashboard">Voltar</Link></button>
                </div>
            </header>
            <main className="containerMainGet">
                <div className="cardTamanho">
                    <div className="campoUsuariosEncontrados">
                        <h3>Usuarios Encontrados: {numeroRegistro} </h3>

                    </div>
                </div>
                <div className="table-card">
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>NOME</th>
                                <th>EMAIL</th>
                                <th className="th-right"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Users.map((user) => (
                                <tr key={user.id}>
                                    <td className="cell-name">{user.name}</td>
                                    <td className="cell-email">{user.email}</td>
                                    <td className="cell-action">
                                        <Link to={`/upadate-user/${user.id}`} className="btn-details">
                                            Veja Detalhes
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}

