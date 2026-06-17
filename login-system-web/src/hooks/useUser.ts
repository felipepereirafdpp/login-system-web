import type { IUserEmailParams } from "../interface/User/IUserEmailParams";
import type { IUserIdParams } from "../interface/User/IUserIdParams";
import type { IUserUpdateParams } from "../interface/User/IUserUpdateParams";
import { listarUsers, listarUsersEmail, listarUsersId, updateUsers } from "../services/user/UserService"


export default function FuncoesUserTela(){

    async function CarregarListaUser(){
        const resposta = await listarUsers()
        return resposta;
    }
    async function CarregarBuscaEmail(dados : IUserEmailParams){
        const resposta = await listarUsersEmail(dados)
        return resposta;
    }
    async function CarregarUpdate(dados : IUserUpdateParams) {
        if(!dados){
            return;
        }
        else{
            const resposta = await updateUsers(dados)
            return resposta
        }
    }
        async function CarregarIDUser(dados: IUserIdParams) {
            if(dados.id){
                const resposta = await listarUsersId(dados)
                return resposta
            }
        }
    return{
        CarregarListaUser,
        CarregarBuscaEmail,
        CarregarUpdate,
        CarregarIDUser
    }
}