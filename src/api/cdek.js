const { instance } = require(".")


export const cdekRegions=async (regionCode,lang)=>{
    const data =await instance.get(`cdek/regions?country=${regionCode}&lang=${lang}`)
    return data
}

export const cdekCities=async (regionCode,lang)=>{
    const data =await instance.get(`cdek/cities?region=${regionCode}&lang=${lang}`)
    return data
}

export const cdekOffice=async (regionCode,lang)=>{
    const data =await instance.get(`cdek/office?city=${regionCode}&lang=${lang}`)
    return data
}
export const cdekCalc=async (calc)=>{
    const data =await instance.post(`cdek/calc?city=${calc}`)
    return data
}