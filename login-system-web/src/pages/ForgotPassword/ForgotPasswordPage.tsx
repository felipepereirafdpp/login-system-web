'use client'
import { useState } from "react";
import FuncoesAuthTela from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import "./ForgotPasswordPage.css"
import "../../components/botao.css"
import "../../components/input.css"
import type { IAuthForgotPasswordParams } from "../../interface/Auth/Input/IAuthForgotPasswordParams";


export default function ForgotPasswordPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [message, setMessge] = useState("")
    const [loading, setLoading] = useState(false)


    const { CarregarEsqueceuSenha } = FuncoesAuthTela();

    async function EfetuarEsqueceuSenha() {
        if (email.toString().trim() == "") {
            setMessge("O Email é obrigatorio")
            return
        }
        setLoading(true)
        try {
            const dados: IAuthForgotPasswordParams = {
                email
            }
            const resposta = CarregarEsqueceuSenha(dados);

            navigate("/reset-password");
            console.log(resposta)

        } catch (error) {
            console.log(error);
            setMessge("Falha ao Enviar Email de Recuperação de Senha")
            setLoading(false)
        }

    }
    return (
        <div className="containerPrincipalForgot">
            {loading && (
                <div className="loadingOverlayForgot">
                    <div className="loadingSpinnerForgot"></div>
                </div>
            )}

            <main>
                <div className="CampoTitle">
                    Recuperação de Senha
                </div>

                <div className="campoPrincipalForgot">

                    <div className="campoFormsForgot">

                        <div className="campoSpanForgot">
                            <span>Para recuperar o acesso à sua conta, informe seu endereço de e-mail.</span>
                        </div>

                        <div className="CampoInputForgot">

                            <input type="text" name="" id="" className="campoInputElement" onChange={(e) => setEmail(e.target.value)} placeholder="Insira seu Email" />

                            <div className="campoBotao">
                                <button onClick={EfetuarEsqueceuSenha} className="campoBotaoElement">Enviar Email</button>
                            </div>
                        </div>

                        <div className="campoMensagemForgot">
                            <div className="campoMensagemTextoForgot">
                                <p>{message}</p>
                            </div>
                        </div>
                        <div className="CampoBotao">
                        <button className="campoBotaoBackElement"><Link to="/">Cancelar</Link></button>
                    </div>
                    </div>
                    
                    
                </div>

            </main>
        </div>
    )
}