import axios from "axios"


export const API_URL="https://back.lemousse.beauty/"

const instance= axios.create({
    baseURL:API_URL,
    
  
})
 const $authHost=axios.create({
    baseURL:API_URL,
    // headers: {
    //     "access-control-allow-methods:": PUT, GET, HEAD, POST, DELETE, OPTIONS
    
    //   }
})

const authInterceptor = config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)
$authHost.interceptors.response.use(
        (config)=>{
            return config
        },
        async (error)=>{
            if (error.response.status=401){
                const originalRequest=error.config
                try {
                    const {data}=await $authHost.post('auth/refresh',{"token_value":localStorage.getItem('refresh')},{withCredentials:true})
                    localStorage.setItem('access',data.access_token)
                    localStorage.setItem('refresh',data.refresh_token)
                    return $authHost.request(originalRequest)
                } catch (error) {
                    localStorage.removeItem('access');
                    localStorage.removeItem('refresh');

                    console.log('not auth')
                    
                }
                 
            }
        }
    )
export {
    instance,
    $authHost
}