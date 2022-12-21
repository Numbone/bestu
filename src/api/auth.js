import { instance } from "."

export const authSignin=async(username,password)=>{
    const data =await instance.post("/auth/sign-in",{password,username})
    return data
}
export const authLink=async(email)=>{
    const data =await instance.post("/auth/link",{email})
    return data
}
export const authChange=async(email)=>{
    const data =await instance.post("/auth/change",{email})
    return data
}