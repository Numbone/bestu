const { instance } = require(".")


export const cdekRegions=async (regionCode)=>{
    const data =await instance.get(`cdek/regions?country=${regionCode}`)
    return data
}

export const cdekCities=async (regionCode)=>{
    const data =await instance.get(`cdek/cities?region=${regionCode}`)
    return data
}

export const cdekOffice=async (regionCode)=>{
    const data =await instance.get(`cdek/office?city=${regionCode}`)
    return data
}
export const cdekCalc=async (calc)=>{
    const data =await instance.post(`cdek/calc?city=${calc}`)
    return data
}