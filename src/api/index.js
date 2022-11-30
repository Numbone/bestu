export const API_URL="https://test-back.thebestforyourself.ru/"

export const instance= axios.create({
    baseURL:API_URL,
    responseType:"json"
})