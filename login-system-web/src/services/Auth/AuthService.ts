import type { IAuthResponseForgotPasswordParams } from "../../interface/Auth/Exit/IAuthResponseForgotPassword";
import type { IAuthResponseResetPassword } from "../../interface/Auth/Exit/IAuthResponseResetPassword";
import type { IAuthResponseToken } from "../../interface/Auth/Exit/IAuthResponseToken";
import type { IAuthForgotPasswordParams } from "../../interface/Auth/Input/IAuthForgotPasswordParams";
import type { IAuthLoginUserParams } from "../../interface/Auth/Input/IAuthLoginUserParams";
import type { IAuthRegisterUserParams } from "../../interface/Auth/Input/IAuthRegisterUserParams";
import type { IAuthResetPasswordParams } from "../../interface/Auth/Input/IAuthResetPasswordParams";
import { api } from "../api";

export async function loginUser(dados: IAuthLoginUserParams): Promise<IAuthResponseToken> {
    const resposta = await api.post("/Auth/Login", dados)
    console.log(resposta.status)
    return resposta.data

}

export async function registerUser(dados: IAuthRegisterUserParams) : Promise<IAuthResponseToken>{
    const resposta = await api.post("/Auth/Registro", dados);
    console.log(resposta.status)
    return resposta.data
}

export async function  forgotPassword(dados:IAuthForgotPasswordParams) :Promise<IAuthResponseForgotPasswordParams>{
    const resposta = await api.post("/Auth/EsqueciSenha",dados)
    console.log(resposta.status)
    return resposta.data
}

export async function resetPassword(dados:IAuthResetPasswordParams) : Promise<IAuthResponseResetPassword> {
    const resposta = await api.post("/Auth/ResetarSenha",dados)
    console.log(resposta.status)
    return resposta.data
}