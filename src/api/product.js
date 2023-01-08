import { instance } from "."

export const productAll=async(lang)=>{
    const data=await instance.get(`product/all?lang=${lang}`)
    return data
}
export const productId=async(id)=>{
    const data=await instance.get(`product/all/${id}`)
    return data
}
export const productAvailable=async(lang)=>{
    const data=await instance.get(`product/available?lang=${lang}`)
    return data
}
export const productCategory=async(category,lang)=>{
    const data=await instance.get(`product/category/${category}?lang=${lang}`)
    return data
}
export const productSearch=async(param)=>{
    const data=await instance.get(`product/search?search=${(param)}`)
    return data
}