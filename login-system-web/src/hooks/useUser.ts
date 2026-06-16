import type { IUserEmailParams } from "../interface/User/IUserEmailParams";
import { listarUsers, listarUsersEmail } from "../services/user/UserService"


export default function FuncoesUserTela(){

    async function CarregarListaUser(){
        const resposta = await listarUsers()
        return resposta;
    }
    async function CarregarBuscaEmail(dados : IUserEmailParams){
        const resposta = await listarUsersEmail(dados)
        return resposta;
    }
    return{
        CarregarListaUser,
        CarregarBuscaEmail
    }
}