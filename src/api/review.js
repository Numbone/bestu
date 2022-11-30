import { instance } from "."


export const reviewAdd=async(review_text,stars)=>{
    const data =await instance.post("api/review/add",{review_text,stars})
    return data
}