
import type { IAuthForgotPasswordParams } from "../interface/Auth/Input/IAuthForgotPasswordParams";
import type { IAuthLoginUserParams } from "../interface/Auth/Input/IAuthLoginUserParams";
import type { IAuthRegisterUserParams } from "../interface/Auth/Input/IAuthRegisterUserParams";
import type { IAuthResetPasswordParams } from "../interface/Auth/Input/IAuthResetPasswordParams";
import { forgotPassword, loginUser, registerUser, resetPassword } from "../services/Auth/AuthService";

export default function FuncoesAuthTela() {
    async function CarregarLogin(dados: IAuthLoginUserParams) {
        const resposta = await loginUser(dados)
        return resposta
    }
    async function CarregarRegistro(dados: IAuthRegisterUserParams){
        const resposta = await registerUser(dados)
        return resposta
    }
    async function CarregarEsqueceuSenha(dados: IAuthForgotPasswordParams){
        const resposta = await forgotPassword(dados)
        return resposta
    }
    async function CarregarResetSenha(dados:IAuthResetPasswordParams) {
        const resposta = await resetPassword(dados)
        return resposta
    }
    return {
        CarregarLogin,
        CarregarRegistro,
        CarregarEsqueceuSenha,
        CarregarResetSenha
    }
}
