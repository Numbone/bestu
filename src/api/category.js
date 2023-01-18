import { instance } from "."


export const getCategories=async()=>{
    const data = await instance("category/all")
    return data
}