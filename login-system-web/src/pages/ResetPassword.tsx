'use client'
import { useState } from "react";
import FuncoesAuthTela from "../hooks/useAuth";
import type { IAuthResetPasswordParams } from "../interface/Auth/Input/IAuthResetPasswordParams";
import { useNavigate } from "react-router";


export default function ResetPasswordPage(){
    const navigate = useNavigate()
    const [token , setToken] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, SetConfirmPassword] = useState("");
    const [message, setMessage] = useState("")
      const [success, setSuccess] = useState(false);

    const { CarregarResetSenha } = FuncoesAuthTela();

    async function EfetuarReset() {
        setSuccess(false);
        if (token.toString().trim() == "" || newPassword.toString().trim() == "" || confirmPassword.toString().trim() == ""){
            setMessage("Algum campo esta invalido")
        }
        try{
        const dados : IAuthResetPasswordParams = {
            token,
            newPassword,
            confirmPassword
        }
        const resposta = await CarregarResetSenha(dados);
        setMessage(resposta.message)
        setSuccess(true);
        console.log(resposta)
        }catch (error){
            console.log(error)
            setMessage("Falha ao realizar recuperação de senha")
        }
        
        
    }
    

    return(
        <div>
            <input type="text" name="" id="" onChange={(e)=> setToken(e.target.value)} placeholder="token"/>
            <input type="text" name="" id="" onChange={(e)=> setNewPassword(e.target.value)} placeholder="nova senha" />
            <input type="text" name="" id="" onChange={(e)=> SetConfirmPassword(e.target.value)} placeholder=" Confirmação Senha" />
            <button onClick={EfetuarReset}>Redefinir Senha</button>
             {message && (
                <div >
                    {success && (
                        <button onClick={() => navigate("/")}>
                            Voltar á login
                        </button>
                    )}
                </div>
            )}
            
        </div> 
    )
}