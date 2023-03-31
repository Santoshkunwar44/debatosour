import { axiosInstance } from "./axios";
import { DebateFormPayloadData } from "./types";

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
export const searchUserByNames= (username:string)=>axiosInstance.get(`/user/search?search_query=${username}`)

// DEBATE API ENDPOINTS

export const createDebateApi=(data:DebateFormPayloadData)=>axiosInstance.post("/debate",data) 
export const getDebateByIdApi=(debateId:string)=>axiosInstance.get(`/debate?_id=${debateId}`)
export const getCurrentDebateApi=()=>axiosInstance.get(`/debate?live=${true}`)

export const getAllDebateApi=()=>axiosInstance.get(`/debate?upcoming=${true}`)


