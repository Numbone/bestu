import { $authHost } from "."


export const reviewAdd=async(review_text,stars)=>{
    const data =await $authHost.post("api/review/add",{review_text,stars})
    return data
}