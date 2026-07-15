import { useEffect, useState } from "react"
import type { IuserParams } from "../../interface/User/IUserParams"
import FuncoesUserTela from "../../hooks/useUser"
import './AllUser.css'
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
        <div className="containerPrincipalUserAll">
            <header className="headerUserAll">
                <div className="infoUserAll">
                    <div className="logoUserAll">
                        <p>A</p>
                    </div>
                    <div className="tituloUserAll">
                        <h2>Login System</h2>
                    </div>
                </div>
                <div className="botaoWrapperUserAll">
                    <button className="botaoVoltarUserAll"><Link to="/dashboard">Voltar</Link></button>
                </div>
            </header>
            <main className="mainUserAll">
                <div className="cardTamanhoUserAll">
                    <div className="badgeUsuariosUserAll">
                        <h3>Usuarios Encontrados: {numeroRegistro} </h3>
                    </div>
                </div>
                <div className="tableCardUserAll">
                    <div className="tableWrapperUserAll">
                        <table className="tableUserAll">
                            <thead>
                                <tr>
                                    <th>NOME</th>
                                    <th>EMAIL</th>
                                    <th className="thRightUserAll"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {Users.map((user) => (
                                    <tr key={user.id}>
                                        <td className="cellNameUserAll">{user.name}</td>
                                        <td className="cellEmailUserAll">{user.email}</td>
                                        <td className="cellActionUserAll">
                                            <Link to={`/upadate-user/${user.id}`} className="btnDetailsUserAll">
                                                Veja Detalhes
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}