import { $authHost, instance } from "."

export const transactionCreate=async(delivery,products,promo_code,pvz_phone,total_cost,user)=>{
    const data= await $authHost.post("api/transaction/create",{delivery,products,promo_code,pvz_phone,total_cost,user})
    return data
}

export const transactionCreate2=async(delivery,products,promo_code,pvz_phone,total_cost,user)=>{
    const data= await instance.post("transaction/create",{delivery,products,promo_code,pvz_phone,total_cost,user})
    return data
}