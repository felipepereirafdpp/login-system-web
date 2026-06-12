import axios from "axios";

export const api = axios.create({
    baseURL: "http://authentication-api.runasp.net"
});