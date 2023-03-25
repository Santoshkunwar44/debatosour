import { axiosInstance } from "./axios";

interface registerPayload{
    firstName:string;
    lastName:string;
    email:string;
    password:string;
}
interface LoginPayload{
    email:string;
    password:string;
}

export const RegisterUserApi =(data:registerPayload)=>axiosInstance.post("/auth/register",data)
export const LoginUserApi =(data:LoginPayload)=>axiosInstance.post("/auth/login",data)
export const getLoggedInUserApi=()=>axiosInstance.get("/user/getLoggedInUser")
export const logoutApi = ()=>axiosInstance.post("/auth/logout");




