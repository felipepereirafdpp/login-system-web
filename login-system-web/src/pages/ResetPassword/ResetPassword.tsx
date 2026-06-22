'use client'
import { useState } from "react";
import FuncoesAuthTela from "../../hooks/useAuth";
import type { IAuthResetPasswordParams } from "../../interface/Auth/Input/IAuthResetPasswordParams";
import { useNavigate } from "react-router";
import "../../components/input.css"
import "../../components/botao.css"
import "./ResetPasswordPage.css"


export default function ResetPasswordPage() {
    const navigate = useNavigate()
    const [token, setToken] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, SetConfirmPassword] = useState("");
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState(false);

    const { CarregarResetSenha } = FuncoesAuthTela();

    async function EfetuarReset() {
        setSuccess(false);
        if (token.toString().trim() == "" || newPassword.toString().trim() == "" || confirmPassword.toString().trim() == "") {
            setMessage("Algum campo esta invalido")
        }
        try {
            const dados: IAuthResetPasswordParams = {
                token,
                newPassword,
                confirmPassword
            }
            const resposta = await CarregarResetSenha(dados);
            setMessage(resposta.message)
            setSuccess(true);
            console.log(resposta)
        } catch (error) {
            console.log(error)
            setMessage("Falha ao realizar recuperação de senha")
        }


    }


    return (
        <div className="containerPrincipalReset">
            <main className="mainReset">
                <div className="CampoTitleReset">
                    Recuperação de Senha
                </div>
                <div className="campoPrincipalReset">
                    <div className="campoFormsReset">
                        <div className="campoSpanReset">
                            <span>Digite o código enviado para seu e-mail e escolha uma nova senha.</span>
                        </div>
                        <div className="campoInputReset">
                            <input type="text" name="" id="" className={"campoInputElement"} onChange={(e) => setToken(e.target.value)} placeholder="Código de verificação" />
                            <input type="text" name="" id="" className={"campoInputElement"} onChange={(e) => setNewPassword(e.target.value)} placeholder="Nova senha" />
                            <input type="text" name="" id="" className={"campoInputElement"} onChange={(e) => SetConfirmPassword(e.target.value)} placeholder="Confirmar senha" />

                            <div className="campoBotao">
                                <button className="campoBotaoElement" onClick={EfetuarReset}>Redefinir Senha</button>
                            </div>

                        </div>

                    </div>
                </div>
                
                    {message && (
                        <div className="campoBotaoLogin" >
                            {success && (
                                <button className="CampoBotaoVoltarLogin" onClick={() => navigate("/")}>
                                    Voltar á login
                                </button>
                            )}
                        </div>
                    )}
                
            </main>
        </div>
    )
}