    import type { IUserEmailParams } from "../../interface/User/IUserEmailParams";
    import type { IUserIdParams } from "../../interface/User/IUserIdParams";
    import type { IuserParams } from "../../interface/User/IUserParams";
    import type { IUserUpdateParams } from "../../interface/User/IUserUpdateParams";

    import { api } from "../api";

    export async function listarUsers() : Promise<IuserParams[]>{
        const resposta = await api.get("/Users")
        console.log(resposta.status)
        return resposta.data
    }

    export async function listarUsersId(dados:IUserIdParams) :  Promise<IuserParams>{
        const resposta = await api.get("/Users/" + dados.id);
        console.log(resposta.status)
        return resposta.data
    }

    export async function listarUsersEmail(dados:IUserEmailParams) : Promise<IuserParams> {
        const resposta = await api.get("/Users/email/" + dados.email)
        console.log(resposta.status)
        return resposta.data
    }

    export async function updateUsers(dados: IUserUpdateParams) : Promise<IuserParams>{
        const resposta = await api.put("/Users",dados)
        console.log(resposta.data)
        return resposta.data
    }

    export async function deletarUsers(dados: IUserIdParams) : Promise<boolean>{
        const resposta = await api.delete("/Users/" + dados.id)
        console.log(resposta.data)
        return resposta.data
    }