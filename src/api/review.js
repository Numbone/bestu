import { $authHost } from "."


export const reviewAdd=async(review_text,stars,id)=>{
    const data =await $authHost.post(`api/review/add?product_id=${id}`,{review_text,stars})
    return data
}