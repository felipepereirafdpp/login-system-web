import axios from "axios";

export const api = axios.create({
    baseURL: "http://authentication-api.runasp.net"
});

api.interceptors.request.use((configuracao)=>{
    const token = localStorage.getItem("token");
    if(token){
        configuracao.headers.Authorization = `Bearer${token}`
    }

    return configuracao;
});