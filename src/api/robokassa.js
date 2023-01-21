import { instance } from "."


export const Robokassa= async(OutSum,InvId,SignatureValue)=>{
    const data=await instance.get(`robokassa/success?OutSum=${OutSum}&InvId=${InvId}&SignatureValue=${SignatureValue}`)
    return data
}