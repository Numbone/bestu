import { instance } from "."


export const getPromocode=async(promocode_text)=>{
    const data =await instance.post("promocode/check",{promocode_text})
    return data
}