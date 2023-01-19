import { $authHost, instance } from "."

export const transactionCreate=async(delivery,delivery_cost,email,father_name,first_name,phone_number,products,promo_code,second_name,total_cost)=>{
    const data= await $authHost.post("api/transaction/create",{delivery,delivery_cost,email,father_name,first_name,phone_number,products,promo_code,second_name,total_cost})
    return data
}

export const transactionCreate2=async(delivery,delivery_cost,products,promo_code,total_cost,user)=>{
    const data= await instance.post("transaction/create",{delivery,delivery_cost,products,promo_code,total_cost,user})
    return data
}