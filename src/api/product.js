import { instance } from "."

export const productAll=async(lang)=>{
    const data=await instance.get(`product/all?lang=${lang}`,)
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
export const productCategory=async(category)=>{
    const data=await instance.get(`product/category/${category}`)
    return data
}
export const productSearch=async(param,lang)=>{
    const data=await instance.get(`product/search?lang=${lang}&search=${(param)}`)
    return data
}
export const productSimilar=async()=>{
    const data=await instance.get(`product/similar`)
    return data
}