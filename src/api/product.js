import { instance } from "."

export const productAll=async()=>{
    const data=await instance.get("product/all")
    return data
}
export const productAllid=async(id)=>{
    const data=await instance.get(`product/all/${id}`)
    return data
}
export const productAvailable=async()=>{
    const data=await instance.get("product/available")
    return data
}
export const productCategory=async(category)=>{
    const data=await instance.get(`product/category/${category}`)
    return data
}
export const productSearch=async()=>{
    const data=await instance.get("product/seacrh")
    return data
}