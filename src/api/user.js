import { instance } from "."

export const getUser=async()=>{
    const data = await instance.get("api/user")
    return data
}   