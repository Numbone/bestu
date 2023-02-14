import { $authHost } from "."


export const reviewAdd=async(id,aroma_stars,delivery_stars,effect_stars,quality_stars,review_text,texture_stars,username)=>{
    const data =await $authHost.post(`api/review/add?product_id=${id}`,{aroma_stars,delivery_stars,effect_stars,quality_stars,review_text,texture_stars,username})
    return data
}