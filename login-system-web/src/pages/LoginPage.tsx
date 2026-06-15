'use client'
import { useState } from "react";
import type { IAuthLoginUserParams } from "../interface/Auth/Input/IAuthLoginUserParams";
import FuncoesAuthTela from "../hooks/useAuth";
import { Link } from "react-router-dom";


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")


    const { CarregarLogin } = FuncoesAuthTela();

    async function EfetuarLogin() {
        const dados: IAuthLoginUserParams = {
            email,
            password
        }

        const resposta = await CarregarLogin(dados)

        console.log(resposta)
        console.log(localStorage.getItem("token"));
    }
    return (
        <div>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={EfetuarLogin}>Entrar</button>
            <div>
                <Link to="/ForgotPassword">
                    Esqueceu sua senha?
                </Link>
            </div>
            <div>
                <span>Não tem uma conta ? <Link to="/RegisterPage">Crie Aqui!</Link></span>
            </div>
        </div>
    )
}