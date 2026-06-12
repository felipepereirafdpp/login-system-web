import type { IuserParams } from "../../User/IUserParams";

export interface IAuthResponseToken{
    token : string; 
    expiresAt : string;
    userId : IuserParams;
    name : string;
    email : string;
}