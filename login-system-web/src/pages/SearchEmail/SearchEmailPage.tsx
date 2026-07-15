import { useState } from "react";
import FuncoesUserTela from "../../hooks/useUser";
import type { IUserEmailParams } from "../../interface/User/IUserEmailParams";
import { type IuserParams } from "../../interface/User/IUserParams";
import "./SearchEmail.css";
import { Link } from "react-router-dom";

export default function SearchEmail() {
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState<IuserParams>();

    const { CarregarBuscaEmail } = FuncoesUserTela();

    async function EfetuarBusca() {
        const dados: IUserEmailParams = {
            email: email
        };

        const resposta = CarregarBuscaEmail(dados);
        const Usuarios = await resposta;
        setUsers(Usuarios);
        console.log(resposta);
    }

    return (
        <div className="containerPrincipalGet">
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

            <main className="containerMainGet">
                <div className="campoBuscaGet">
                    <input className="campoInputElementSearch" type="text" placeholder="Insira o email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <button className="campoBotaoElementSearch" onClick={EfetuarBusca}>
                        Buscar
                    </button>
                </div>

                <div className="table-card">
                    <div className="table-wrapper">
                        <table className="user-table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Registro</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users && (
                                    <tr>
                                        <td className="cell-name"><p className="span-info">Nome Funcionario:</p> {users?.name}</td>
                                        <td className="cell-email"><p className="span-info">Email Funcionario:</p> {users?.email}</td>
                                        <td className="cell-id"><p className="span-info">N° Contrato: </p>{users?.id}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}