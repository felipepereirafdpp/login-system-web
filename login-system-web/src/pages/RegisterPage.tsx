'use client'
import { useState } from "react";
import FuncoesAuthTela from "../hooks/useAuth";
import type { IAuthRegisterUserParams } from "../interface/Auth/Input/IAuthRegisterUserParams";

export default function RegisterPage(){
    const [email , setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const {CarregarRegistro} = FuncoesAuthTela();

    async function EfetuarRegistro() {
        const dados : IAuthRegisterUserParams = {
            name,
            email,
            password,
        }
        const resposta = await CarregarRegistro(dados)
        console.log(resposta)
        console.log(localStorage.getItem("token"));

    }
    return(
        <div>
            <input type="text" name="" id="" onChange={(e) => setEmail(e.target.value)} placeholder="Emaiç"/>
            <input type="text" name="" id="" onChange={(e) => setName(e.target.value)} placeholder="Nome"/>
            <input type="text" name="" id="" onChange={(e) => setPassword(e.target.value)} placeholder="Senha"/>
            <button onClick={EfetuarRegistro}>Cadastrar</button>
        </div>
    )
}