'use client'
import { useState } from "react";
import FuncoesAuthTela from "../../hooks/useAuth";
import type { IAuthRegisterUserParams } from "../../interface/Auth/Input/IAuthRegisterUserParams";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterPage.css"
import "../../components/input.css"
import "../../components/botao.css"


export default function RegisterPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("")

    const { CarregarRegistro } = FuncoesAuthTela();

    async function EfetuarRegistro() {
        if (name.trim() == "" || email.trim() == "" || password.trim() == "") {
            return setMessage("Todos os campos são necessarios.")
        }
        setLoading(true)
        try {
            const dados: IAuthRegisterUserParams = {
                name,
                email,
                password,
            }
            const resposta = await CarregarRegistro(dados)
            console.log(resposta)
            console.log(localStorage.getItem("token"));
            navigate("/")

        } catch (error) {
            setMessage("Erro ao realizar o cadastro")
        }

    }
    return (
        <div className="containerPrincipalRegistro">
            {loading && (
                <div className="loadingOverlayRegistro">
                    <div className="loadingSpinnerRegistro"></div>
                </div>
            )}
            <header className="HeaderRegistro">
                <div className="campoInformacoesRegistro">
                    <div className="campoLogoRegistro">
                        <p>A</p>
                    </div>
                    <div className="cardRegistroTitle">
                        <h2>Login System</h2>
                    </div>
                </div>
                <div className="campBotaoRegistro">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FF0000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg>
                    <button className="campoBotaoBackElement"><Link to="/">Login</Link></button>
                </div>
            </header>

            <main>
                <div className="CampoTitle">
                    Cadastre-se
                </div>

                <div className="campoPrincipalRegistro">

                    <div className="campoFormsRegistro">

                        <div className="campoSpanRegistro">
                            <span>Informe suas informações para concluir o cadastro.</span>
                        </div>

                        <div className="CampoInputRegistro">
                            <input type="text" className={"campoInputElement"} id="" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

                            <input type="text" className={"campoInputElement"} id="" onChange={(e) => setName(e.target.value)} placeholder="Nome Completo" />

                            <input type="text" className={"campoInputElement"} id="" onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />

                            <div className="campoBotaoRegistro">
                                <button className="campoBotaoElement" onClick={EfetuarRegistro}>Cadastrar</button>
                            </div>
                            <div className="campoMensagemTexto">
                                <p>{message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}