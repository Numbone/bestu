import { $authHost  } from "."

export const getUser=async()=>{
    const {data} = await $authHost.get("api/user")
    return data
}   