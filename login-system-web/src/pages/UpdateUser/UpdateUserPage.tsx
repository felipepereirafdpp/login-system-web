import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FuncoesUserTela from "../../hooks/useUser";
import type { IuserParams } from "../../interface/User/IUserParams";
import "./UpdateUserPage.css"

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
        if (!users) {
            return;
        }
        const dados = await CarregarUpdate(users)
        setUsers(dados)
    }

    useEffect(() => { BuscarPorID(); }, [])

    return (
        <div className="containerPrincipal">
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
            <main>
                <div className="CampoTitle">
                    Área de atualização de dados
                </div>
                <div className="campoPrincipalUpdate">
                    
                    <div className="campoForm">

                        <div className="campoInput">

                            <input type="text" className="campoInputElement" value={users?.name ?? ""} onChange={(e) => setUsers({ ...users!, name: e.target.value })} />
                            <input type="text" className="campoInputElement" value={users?.email ?? ""} onChange={(e) => setUsers({ ...users!, email: e.target.value })} />
                            
                            <div className="campoBotao">
                                <button className="campoBotaoElement" onClick={AtualizarUser}>Atualizar</button>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}