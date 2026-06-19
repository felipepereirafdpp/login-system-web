'use client'
import { useState } from "react";
import type { IAuthLoginUserParams } from "../../interface/Auth/Input/IAuthLoginUserParams";
import FuncoesAuthTela from "../../hooks/useAuth";
import "./LoginPage.css"
import "../../components/input.css"
import "../../components/botao.css"
import { Link, useNavigate } from "react-router-dom";


export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [message, setMessge] = useState("")
    const [loading, setLoading] = useState(false)


    const { CarregarLogin } = FuncoesAuthTela();

    async function EfetuarLogin() {
        if (email == "" || password == "") {
            setMessge("Email ou senha inválidos.")
            return
        }
        setLoading(true)
        setMessge("")
        const dados: IAuthLoginUserParams = {
            email,
            password
        }

        const resposta = await CarregarLogin(dados)

        console.log(resposta)
        console.log(localStorage.getItem("token"));

        if (resposta.token != null) {
            navigate("/dashboard");
        } else {
            setMessge("Email ou senha inválidos")
            setLoading(false)
        }

    }

    return (
        <div className="containerPrincipal">
            {loading && (
                <div className="loadingOverlay">
                    <div className="loadingSpinner"></div>
                </div>
            )}

            <header>
                <div className="campoLogo">
                    <p>A</p>
                </div>
                <div className="cardHeaderTitle">
                    <h2>Login System</h2>
                </div>

            </header>
            
            <main>
                <div className="CampoTitle">
                    Realize Login
                </div>
                <div className="campoPrincipal">

                    <div className="campoForms">
                        <div className="campoInput">
                            <input type="text" placeholder="Email" className={"campoInputElement"} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
                            <input type="password" placeholder="Senha" className="campoInputElement" onChange={(e) => setPassword(e.target.value)} disabled={loading} />

                            <div className="campoBotao">
                                <button className="campoBotaoElement" onClick={EfetuarLogin} disabled={loading}>Entrar</button>
                            </div>
                        </div>

                        <div className="campoText">
                            <div className="campoMensagem">
                                <div className="campoMensagemTexto">
                                    <p>{message}</p>
                                </div>
                            </div>
                            <div className="campoInformacoes">
                                <div className="campoEsqueceuSenha">
                                    <Link to="/ForgotPassword">
                                        Esqueceu sua senha?
                                    </Link>
                                </div>
                                <div className="campoCriaConta">
                                    <span>Não tem uma conta ? <Link to="/RegisterPage">Crie Aqui!</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

        </div>
    )
}