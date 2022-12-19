import axios from "axios"

export const API_URL="https://back.lemousse.beauty/"

export const instance= axios.create({
    baseURL:API_URL,
  
})