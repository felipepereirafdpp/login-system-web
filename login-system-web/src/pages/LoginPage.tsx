'use client'
import { useState } from "react";
import type { IAuthLoginUserParams } from "../interface/Auth/Input/IAuthLoginUserParams";
import FuncoesAuthTela from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";


export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [message, setMessge]= useState("")


    const { CarregarLogin } = FuncoesAuthTela();

    async function EfetuarLogin() {
        if(email == "" || password == ""){
            setMessge("Campos Invalidos")
        }
        const dados: IAuthLoginUserParams = {
            email,
            password
        }

        const resposta = await CarregarLogin(dados)

        console.log(resposta)
        console.log(localStorage.getItem("token"));
        
        if (resposta.token != null){
            navigate("/dashboard");
        }
    }

    return (
        <div>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={EfetuarLogin}>Entrar</button>
            <p>{message}</p>
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