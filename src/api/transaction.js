import { instance } from "."

export const transactionCreate=async(date,delivery,disoiunt_cost,email,father_name, final_payment,first_name,id,phone_number,products,promo_code,second_name,total_cost)=>{
    const data= await instance.post("api/transaction/create",{date,delivery,disoiunt_cost,email,father_name, final_payment,first_name,id,phone_number,products,promo_code,second_name,total_cost})
    return data
}

export const transactionCreate2=async(date,delivery,disoiunt_cost,email,father_name, final_payment,first_name,id,phone_number,products,promo_code,second_name,total_cost)=>{
    const data= await instance.post("transaction/create",{date,delivery,disoiunt_cost,email,father_name, final_payment,first_name,id,phone_number,products,promo_code,second_name,total_cost})
    return data
}