import { $authHost, instance } from "."

export const transactionCreate=async(delivery,email,father_name,first_name,phone_number,products,promo_code,second_name,total_cost)=>{
    const data= await $authHost.post("api/transaction/create",{delivery,email,father_name,first_name,phone_number,products,promo_code,second_name,total_cost})
    return data
}

export const transactionCreate2=async(delivery,products,promo_code,total_cost,user)=>{
    const data= await instance.post("transaction/create",{delivery,products,promo_code,total_cost,user})
    return data
}