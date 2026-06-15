'use client'
import { useState } from "react";
import FuncoesAuthTela from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import type { IAuthForgotPasswordParams } from "../interface/Auth/Input/IAuthForgotPasswordParams";


export default function ForgotPasswordPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [message, setMessge] = useState("")


    const { CarregarEsqueceuSenha } = FuncoesAuthTela();

    async function EfetuarEsqueceuSenha() {
        if (email.toString().trim() == "") {
            setMessge("O Email é obrigatorio")
            return
        }
        
        try {
            const dados: IAuthForgotPasswordParams = {
                email
            }
            const resposta = CarregarEsqueceuSenha(dados);

            navigate("/reset-password");
            console.log(resposta)
        }catch (error) {
            console.log(error);
            setMessge("Falha ao Enviar Email de Recuperação de Senha")
        }
        
    }
    return (
        <div>
            <input type="text" name="" id="" onChange={(e) => setEmail(e.target.value)} />
            <button onClick={EfetuarEsqueceuSenha} >Enviar Email</button>
            <p>{message}</p>
        </div>
    )
}