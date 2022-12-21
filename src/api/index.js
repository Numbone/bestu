import axios from "axios"

export const API_URL="https://back.lemousse.beauty/"

const instance= axios.create({
    baseURL:API_URL,
  
})
 const $authHost=axios.create({
    baseURL:API_URL,
    // headers: {
    //     "Authorization": `${localStorage.getItem('access')}`,
    
    //   }
})

const authInterceptor = config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`
    return config
}
$authHost.interceptors.request.use(authInterceptor)

export {
    instance,
    $authHost
}